import { GrammarError } from "./grammarType"

export type Message = {
    role: string,
    content: string,
    timestamp: string,
    error: GrammarError[] | null,
  }