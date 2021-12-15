import React from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";

const schema = yup.object({
    nickname: yup.string().required('Введите ник'),
}).required()


function Form({onSubmit, isLoading}) {
    const {handleSubmit, formState, register, setValue} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            nickname: ''
        }
    });
    const {errors} = formState
    const inputBtn = React.useRef(null)

    const debounce = (fn, ms) => {

        let timeout;
        return function () {
            const fnCall = () => { fn.apply(this, arguments) }
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms)
        };
    }

    function onChange(e) {
        setValue('nickname', e.target.value)
        inputBtn.current.click()
    }

    onChange = debounce(onChange, 500);


    return (
        <form className="app-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="app-input" placeholder="Укажите GitHub-аккаунт"
                   {...register("nickname")} onChange={onChange}/>
            <p>{errors.nickname?.message}</p>
            <button ref={inputBtn} className="app-form_btn"
                    disabled={isLoading}>{isLoading ? 'Загрузка' : 'Найти'}</button>
        </form>
    )
}

export default Form