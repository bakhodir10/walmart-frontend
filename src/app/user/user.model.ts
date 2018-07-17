export class User {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  likes: {
    feedback_id: string,
    product_name: string,
    price: number,
    expire_date,
    rate: number
  };
}
