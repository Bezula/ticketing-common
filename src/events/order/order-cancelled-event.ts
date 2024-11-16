import { Subjects } from "../subjects";

export type OrderCancelledEvent = {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
};
