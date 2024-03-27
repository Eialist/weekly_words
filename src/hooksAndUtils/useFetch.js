import { useEffect } from "react";
import { get, post } from "./fetchUtil";

const FetchHelper = (func, stateSetter) => {
    useEffect(() => {
        (async () => {
            let result = await func();
            stateSetter(result);
        })();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
};

export function useGet(url, stateSetter) {
    FetchHelper(() => get(url), stateSetter, url, 'get');
}

export function usePost(url, body, stateSetter) {
    FetchHelper(() => post(url, body), stateSetter, url, 'post')
}