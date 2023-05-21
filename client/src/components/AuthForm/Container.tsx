import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface AuthFormContainerProps {
  title: string;
  children: ReactNode;
  isLoading: boolean;
  submitBtnText: string;
  loadingText: string;
  authSwitchText: string;
  authSwitchLink: string;
  authSwitchLinkText: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function AuthFormContainer(props: AuthFormContainerProps) {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Title */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {props.title}
        </h2>
      </div>

      {/* The white box container with form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-50 dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={props.onSubmit} noValidate={true} className="space-y-6">
            {props.children}

            <div>
              {/* Submit Button */}
              <button
                type="submit"
                title={props.loadingText}
                disabled={props.isLoading}
                className="relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 disabled:cursor-wait disabled:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {props.isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faCircleNotch} spin size="xl" />
                    {props.loadingText}
                  </>
                ) : (
                  props.submitBtnText
                )}
              </button>

              {/* Auth switch link */}
              <div className="text-sm mt-4 text-center text-gray-600 dark:text-gray-300">
                {props.authSwitchText}{" "}
                <Link to={props.authSwitchLink} className="font-medium text-indigo-500 hover:text-indigo-600">
                  {props.authSwitchLinkText}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

