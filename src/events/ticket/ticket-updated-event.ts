import { Subjects } from "../subjects";

export type TicketUpdatedEvent = {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
};
