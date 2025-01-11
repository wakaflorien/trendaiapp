"use client";
import * as React from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Nav";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { LoginFormData, LoginValidationErrors } from "@/@types/global";
import { validateEmail, validatePassword } from "@/utils/validation";

 const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
     const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
const LoginPage = () => {
    const [formData, setFormData] = React.useState<LoginFormData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState<LoginValidationErrors>({});

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors: LoginValidationErrors = {};
  
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
  
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (!validatePassword(formData.password)) {
        newErrors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {

        if (validateForm()) {
            console.log('Form is valid', formData);
            // Proceed with form submission
            window.location.href = "/dashboard"
          } else {
            console.log('Form has errors', errors);
          }
    };

    return (
        <div>
            <Navbar isDashboard={false} />

            <form noValidate autoComplete="off" className='flex flex-col gap-4 p-4 max-w-[500px] mx-auto'>
                <header className='text-center font-semibold text-xl'>Login</header>

                <TextField
                    helperText={errors.email || ""}
                    error={!!errors.email}
                    label="Email"
                    variant="outlined"
                    type='email'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <FormControl variant="outlined" error={!!errors.password}  className='w-full'>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        label="Password"
                        name='password'
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <small className='text-[#d3302f]'>{errors.password}</small>
                </FormControl>

                <Button text="Login" type="button" className="bg-[#89e81d] rounded-md p-2 h-12" onClick={handleSubmit} />

            </form>
        </div>
    );
}

export default LoginPage;