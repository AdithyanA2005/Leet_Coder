import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { doEmailValidations, doNameValidations, doPasswordValidations } from "../utils/form/validations";
import { handleSignUp } from "../utils/api/auth";
import AuthContext from "../context/Auth/AuthContext";
import AuthFormContainer from "../components/AuthForm/Container";
import InputGroup from "../components/AuthForm/InputGroup";

export default function SignUpPage() {
  // Denote whether the signup action is pending
  const [loading, setLoading] = useState<boolean>(false);

  // Extract from auth context
  const { login } = useContext(AuthContext);

  // Store input values
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Store input errors
  const [nameErr, setNameErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");

  // Handle Input Fields OnChange
  const handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value.trim());
    setNameErr(doNameValidations(e.target.value.trim()));
  };
  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value.trim());
    setEmailErr(doEmailValidations(e.target.value.trim()));
  };
  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value.trim());
    setPasswordErr(doPasswordValidations(e.target.value.trim()));
  };

  // Handle Form Submission
  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Check fields for validation error
    const tempNameErr = doNameValidations(name);
    const tempEmailErr = doEmailValidations(email);
    const tempPasswordErr = doPasswordValidations(password);

    // Set the error state variables
    setNameErr(tempNameErr);
    setEmailErr(tempEmailErr);
    setPasswordErr(tempPasswordErr);

    // Only proceed further if there is no validation errors
    if (tempNameErr || tempEmailErr || tempPasswordErr) return;

    // Set loading to true before sending request to API
    setLoading(true);

    // Send request to API
    handleSignUp(name, email, password)
      .then(({ name, token }) => login(name, token))
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false))
  };

  return (
    <AuthFormContainer
      title="Sign Up for an account"
      isLoading={loading}
      submitBtnText="Sign Up"
      loadingText="Signing Up"
      authSwitchText="Already have an account?"
      authSwitchLink="/signin"
      authSwitchLinkText="Sign In"
      onSubmit={handleFormSubmission}
    >
      {/* Name Input */}
      <InputGroup
        label="Name"
        name="name"
        type="text"
        isLoading={loading}
        autoComplete="name"
        onChange={handleNameOnChange}
        error={nameErr}
        value={name}
      />

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
    </AuthFormContainer>
  );
};

