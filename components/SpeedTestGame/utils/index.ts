import { paragraphs } from "../data";

export const getRandomParagraph = (paragraphs: string[]) =>
  paragraphs[Math.floor(Math.random() * paragraphs.length)];

export const getSpelling = (text: string) => text.split("");

export const getTypingText = (paragraphs: string[]) =>
  getSpelling(getRandomParagraph(paragraphs));
