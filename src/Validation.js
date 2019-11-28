import * as yup from 'yup';

export let dateValidationSchema = yup.object().shape({
    startDate: yup
        .date().default(function () {
            return new Date();
        })
        .required(),

    endDate: yup
        .date().default(function () {
            return new Date();
        })
        .required()
});

// check validity
dateValidationSchema
    .isValid({
        startDate: new Date(),
        endDate: new Date(),
    })
    .then(function (valid) {
        return valid; // => true
    });

// you can try and type cast objects to the defined schema
dateValidationSchema.cast({
    startDate: '2014-09-23',
    endDate: '2014-09-23',
});

