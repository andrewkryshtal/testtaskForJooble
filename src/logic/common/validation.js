const validate = values => {
    const errors = {};
    const codeVal = values['code'] ? values['code'] : [];
    const nameVal = values['name'] ? values['name'] : [];
    const priceVal = values['price'] ? parseInt(values['price']) : parseInt([].length);
    const shelfLifeVal = values['shelfLife'] ? parseInt(values['shelfLife']) : parseInt([].length);
    const compositionAndFormOfReleaseVal = values['compositionAndFormOfRelease'] ? values['compositionAndFormOfRelease'] : [];
    const indicationVal = values['indication'] ? values['indication'] : [];
    const сontraindicationsVal = values['indication'] ? values['indication'] : [];

    if(codeVal.length < 5 || codeVal.length > 10) {
        errors['code'] = 'allowed from 5 till 10 symbols'
    }

    if(nameVal.length < 5 || nameVal.length > 100) {
        errors['name'] = 'allowed from 5 till 100 symbols';
    }

    if(isNaN(priceVal.toString()) || values['price'] < 0.01 || values['price'] > 1000000) {
        errors['price'] = 'allowed numbers from 0.01 till 1000000$';
    }

    if(isNaN(shelfLifeVal.toString()) || shelfLifeVal < 1 || shelfLifeVal > 1000) {
        errors['shelfLife'] = 'allowed numbers from 1 till 1000 days'
    }

    if(compositionAndFormOfReleaseVal < 0 || compositionAndFormOfReleaseVal > 2000) {
        errors['compositionAndFormOfRelease'] = 'allowed from 0 till 2000 symbols';
    }

    if(indicationVal < 0 || indicationVal > 2000) {
        errors['indication'] = 'allowed from 0 till 2000 symbols';
    }

    if(сontraindicationsVal < 0 || сontraindicationsVal > 2000) {
        errors['indication'] = 'allowed from 0 till 2000 symbols';
    }

    return errors;
};

export default validate;