import React, { useCallback, useContext, useEffect, useState } from "react";
import useHttp from "./../../hooks/http.hook";
import { AuthContext } from "./../../context/AuthContext";
import { Loader } from "../../components/Loader/Loader";
import { LinksList } from "./LinksList";

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);

  const loadLinks = useCallback(async () => {
    try {
      const data = await request(`/api/link/`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(data);
    } catch (error) {}
  }, [token, setLinks, request]);

  useEffect(() => {
    loadLinks();
  }, [loadLinks]);

  if (loading) {
    return <Loader />;
  }

  return <div>{!loading && <LinksList links={links} />}</div>;
};
