export interface Issue {
    type: string;
    description: string;
  }

export interface ResponseData {
    is_correct: boolean;
    score: number;
    feedback: string;
    issues: Issue[];
  }