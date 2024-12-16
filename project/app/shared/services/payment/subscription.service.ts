import { PaymentService } from './payment.service';
import { StorageService } from '../storage.service';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export class SubscriptionService {
  private readonly PLANS: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 0,
      features: ['Limited consultations', 'Basic analysis']
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 9.99,
      features: ['Unlimited consultations', 'Advanced analysis', 'Priority support']
    }
  ];

  constructor(
    private paymentService: PaymentService,
    private storageService: StorageService
  ) {}

  getAvailablePlans(): SubscriptionPlan[] {
    return this.PLANS;
  }

  async getCurrentPlan(): Promise<SubscriptionPlan> {
    const planId = await this.storageService.getSecure('subscription_plan');
    return this.PLANS.find(plan => plan.id === planId) || this.PLANS[0];
  }

  async upgradePlan(planId: string): Promise<boolean> {
    const plan = this.PLANS.find(p => p.id === planId);
    if (!plan) throw new Error('Invalid plan');

    if (plan.price > 0) {
      const payment = await this.paymentService.initializePayment(plan.price);
      if (!payment.success) return false;
    }

    await this.storageService.saveSecure('subscription_plan', planId);
    return true;
  }
}