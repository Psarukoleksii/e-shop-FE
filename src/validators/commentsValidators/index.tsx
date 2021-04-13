import * as Yup from 'yup';

export const commentsSchema = Yup.object().shape({
  comment: Yup.string()
    .min(10)
    .max(10000)
})
