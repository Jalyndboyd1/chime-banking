import './Login.css'

function Login() {
    return (
        <div className='login' style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '25px',
        }}>
            {/* text align center */}
            {/* img */}
            <img
                src='https://swingsearch.com/wp-content/uploads/2019/07/chime-logo-transparent-green.png'
                alt='Chime'
                style={{
                    height: '85px'
                }}
            />
            {/* form */}
            <form style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop: '2.6rem',
                fontSize: '16px',
                fontWeight: 300

            }}
            className='login__form'
            >
                <input placeholder='Email' style={{
                    width: '400px',
                    marginBottom: '5px',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    border: '1px solid #dedede',
                    outline: 'none',
                    height: '25px',
                    transition:'450ms'
                }}/>
                <input placeholder='Password' type='password' style={{
                    width: '400px',
                    marginBottom: '5px',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    border: '1px solid #dedede',
                    outline: 'none',
                    height: '25px',
                    transition:'450ms'
                }} />
                <button style={{
                    width: '430px',
                    marginTop: '10px',
                    padding: '15px',
                    border: 'none',
                    borderRadius: '6px',
                    background: '#1ec677',
                    color: '#fff',
                    cursor: 'pointer'
                }}>Log in</button>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '430px',
                    fontSize: '13px',
                    color: '#89b2d5',
                    marginTop: '10px',
                }}>
                    {/* account recovery */}
                    <a>Forgot your email?</a>
                    <a>Forgot your assword?</a>
                </div>
            </form>
            {/* terms and agreement */}
            <p style={{
                color: '#b3b3b3',
                width: '330px',
                marginTop: '1.5rem'
            }}>
                By clicking “Log In”, you agree to receive SMS text messages from Chime to verify your identity
            </p>
            {/* footer */}
            <footer style={{
                width: '500px',
                color: '#b3b3b3',
                fontSize: '10px',
                marginTop: '2rem'
            }}>
                <p style={{
                    marginBottom: '1rem'
                }}>© 2022 Chime. All Rights Reserved.</p>

                <p>
                    Banking Services provided by The Bancorp Bank or Stride Bank, N.A., Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. Please see back of your Card for its issuing bank.
                </p>
            </footer>
        </div>
    )
}

export default Login