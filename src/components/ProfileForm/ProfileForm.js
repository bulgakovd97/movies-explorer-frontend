function ProfileForm({formName, children}) {
    return (
        <form className='profile-form' name={`${formName}-form`}>
            <fieldset className='profile-form__fieldset'>
                {children}
            </fieldset>
        </form>
    )
}

export default ProfileForm;