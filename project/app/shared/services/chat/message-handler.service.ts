import { DiagnosisResult } from '../../models/diagnosis.model';
import { SymptomAssessment } from '../../models/diagnosis.model';

export class MessageHandlerService {
  private context: {
    diagnosis?: DiagnosisResult;
    assessment?: SymptomAssessment;
  } = {};

  setContext(diagnosis: DiagnosisResult, assessment: SymptomAssessment) {
    this.context = { diagnosis, assessment };
  }

  async generateResponse(userMessage: string): Promise<string> {
    const keywords = this.extractKeywords(userMessage.toLowerCase());
    
    if (this.context.diagnosis && this.context.assessment) {
      return this.generateContextualResponse(keywords);
    }
    
    return this.generateGeneralResponse(keywords);
  }

  private extractKeywords(message: string): string[] {
    const keywords = ['pain', 'symptoms', 'treatment', 'doctor', 'emergency'];
    return keywords.filter(keyword => message.includes(keyword));
  }

  private generateContextualResponse(keywords: string[]): string {
    // TODO: Implement more sophisticated response generation
    if (this.context.diagnosis.requiresImmediate) {
      return 'Based on the analysis, I strongly recommend seeking immediate medical attention.';
    }
    
    return 'Based on your symptoms and the image analysis, I recommend following the provided treatment suggestions and monitoring the condition.';
  }

  private generateGeneralResponse(keywords: string[]): string {
    return 'I understand your concern. However, I\'d need more information about your symptoms and a clear image to provide better guidance.';
  }
}