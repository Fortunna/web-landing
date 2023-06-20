import { useAuth } from "@/contexts/auth";
import React, { useCallback, useEffect } from "react";
import PageLoading from "./loading";
import { getUserSession } from "@/utils/auth";
import { AuthActionTypes } from "@/reducers/auth";
import Header from "./header";
import Sidebar from "./sidebar";

type componentProps = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: componentProps) {
  const { isLoading, isLoggedIn, authDispatch } = useAuth();

  //You can move this function to a top level, if you want it to involve fast
  const handleGetSession = useCallback(async () => {
    try {
      authDispatch({
        type: AuthActionTypes.LOADING,
      });
      const user = await getUserSession();
      if (user) {
        authDispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: { user },
        });
      } else {
        authDispatch({
          type: AuthActionTypes.LOGOUT,
        });
      }
    } catch (error) {
      authDispatch({
        type: AuthActionTypes.LOGOUT,
      });
    }
  }, [authDispatch]);

  // useEffect(() => {
  //   handleGetSession();
  // }, [handleGetSession]);

  // if (isLoading) {
  //   return <PageLoading />;
  // }

  // if (!isLoading && !isLoggedIn) {
  //   location.href = "/auth/login";
  // }

  return (
    <div className="grid md:grid-cols-[18%_auto] gap-0 bg-theme-bg bg-cover   h-screen w-screen overflow-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div>
        <Header />
        <div className="overflow-y-auto h-screen pb-[64px]">
          <div className="mb-[20px]"></div>
          {children}
          <div className="mb-[50px]"></div>
        </div>
      </div>
    </div>
  );
}
