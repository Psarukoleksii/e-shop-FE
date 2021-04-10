import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  category: Yup.string()
    .min(2, 'SMALL')
});
