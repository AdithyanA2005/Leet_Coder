import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { doEmailValidations, doPasswordValidations } from "../utils/form/validations";
import { handleSignIn } from "../utils/api/auth";
import AuthFormContainer from "../components/AuthForm/Container";
import AuthContext from "../context/Auth/AuthContext";
import InputGroup from "../components/AuthForm/InputGroup";

export default function SignInPage() {
  // Denote whether the signin action is pending
  const [loading, setLoading] = useState<boolean>(false);

  // Extract from auth context
  const { login } = useContext(AuthContext);

  // Store input values
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Store input errors
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");

  // Handle input fields OnChange
  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
    setEmailErr(doEmailValidations(e.target.value.trim()));
  };
  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
    setPasswordErr(doPasswordValidations(e.target.value.trim()));
  };

  // Handle Form Submission
  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check fields for validation error
    const tempEmailErr: string = doEmailValidations(email);
    const tempPasswordErr: string = doPasswordValidations(password);

    // Set the error state variables
    setEmailErr(tempEmailErr);
    setPasswordErr(tempPasswordErr);

    // Only proceed further if there is no validation errors
    if (tempEmailErr || tempPasswordErr) return;

    // Set loading to true before sending request to API
    setLoading(true);

    // Send request to API
    handleSignIn(email, password)
      .then(({ name, token }) => login(name, token))
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false))
  };

  return (
    <AuthFormContainer
      title="Log in to your account"
      isLoading={loading}
      submitBtnText="Sign In"
      loadingText="Signing In"
      authSwitchText="Don't have an account?"
      authSwitchLink="/signup"
      authSwitchLinkText="Sign Up"
      onSubmit={handleFormSubmission}
    >
      {/* Email Input */}
      <InputGroup
        label="Email address"
        name="email"
        type="email"
        isLoading={loading}
        autoComplete="email"
        onChange={handleEmailOnChange}
        error={emailErr}
        value={email}
      />

      {/* Password Input */}
      <InputGroup
        label="Password"
        name="password"
        type="password"
        isLoading={loading}
        autoComplete="current-password"
        onChange={handlePasswordOnChange}
        error={passwordErr}
        value={password}
      />

      {/* Forgot Password Link */}
      {/* <div className="flex items-center"> */}
      {/*   <Link to="#" className="font-medium text-sm text-indigo-600 hover:text-indigo-500"> */}
      {/*     Forgot your password? */}
      {/*   </Link> */}
      {/* </div> */}
    </AuthFormContainer>
  );
};

