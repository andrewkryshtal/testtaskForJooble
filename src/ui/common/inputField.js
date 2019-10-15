import React, {Fragment} from 'react';

const inputField = ({ input, label, type, className, labelClassName, validationErrorClass, fieldWrapper, meta: { dirty, error, warning } }) => (
   <Fragment>
        <div className={fieldWrapper}>
        <label className={labelClassName}>{label}</label>
        <input className={className} {...input} placeholder={label} type={type}/>
        {dirty && error ? (<span className={validationErrorClass}>{error}</span>) : null}
        </div>
    </Fragment>
)

export default inputField;