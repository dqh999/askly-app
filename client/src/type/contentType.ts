export interface ContentType {
  type: "s" | "p";         
  description: string;   
}
export interface Content {
    topic: string[];
    type: string,
    band: number,
    english: string,
    vietnamese: string
  }