export class Product {
  _id: string;
  name: string;
  price: number;
  expire_date: Date;
  quantity: number;
  rate: number;
  feedback: [
    {user_id: string, rate: number, comment: string, comment_date: Date}
  ]
}
