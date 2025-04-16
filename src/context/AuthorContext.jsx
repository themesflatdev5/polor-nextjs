"use client";
import { createContext, useContext } from "react";

export const AuthorContext = createContext(null);

export function useAuthor() {
    const context = useContext(AuthorContext);
    if (context === null) {
        throw new Error("useAuthor must be used within an AuthorProvider");
    }
    return context;
}

export function AuthorProvider({ children, author }) {
    return (
        <AuthorContext.Provider value={author}>
            {children}
        </AuthorContext.Provider>
    );
}
