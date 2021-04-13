import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  category: Yup.string()
    .min(2)
    .max(50)
    .required(),
  name: Yup.string()
    .min(2)
    .max(50)
    .required(),
  image: Yup.string()
    .required(),
  price: Yup.number()
    .min(0)
    .max(99999999)
    .required(),
  currency: Yup.string()
    .min(1)
    .max(20)
    .required(),
  producer: Yup.string()
    .min(2)
    .max(50)
    .required(),
  mass: Yup.number()
    .min(0)
    .max(99999999)
    .required(),
  weight: Yup.string()
    .min(0)
    .max(30)
    .required(),
  counterInStorage: Yup.number()
    .min(0)
    .max(9999999)
    .required(),
  counterOfPurchases: Yup.number()
    .min(0)
    .max(9999999)
    .required(),
});
