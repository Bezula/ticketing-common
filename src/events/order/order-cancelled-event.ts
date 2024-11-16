import { Subjects } from "../subjects";

export type OrderCancelled = {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
};
