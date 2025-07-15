// src/app/App.tsx
import "./styles/App.css";
import React, { useState } from "react";
import { Button } from "../lib/components";

interface HelloResponse {
    message: string;
    timestamp: string;
    version?: string;
    received?: { name?: string };
}

const App: React.FC = () => {
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    const handleGet = async () => {
        setLoading(true);
        try {
            const res = await fetch("/hello");
            const data: HelloResponse = await res.json();
            setResponse(data.message);
        } catch (error) {
            setResponse("Erro ao conectar com a API");
        } finally {
            setLoading(false);
        }
    };

    const handlePost = async () => {
        setLoading(true);
        try {
            const res = await fetch("/hello", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name || undefined }),
            });
            const data: HelloResponse = await res.json();
            setResponse(data.message);
        } catch (error) {
            setResponse("Erro ao enviar dados");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                padding: "2rem",
                maxWidth: "600px",
                margin: "0 auto",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <h1>🚀 Projeto Fullstack Simples</h1>

            <div style={{ marginBottom: "2rem" }}>
                <p>
                    <strong>Frontend:</strong> RSBuild + React + TypeScript
                </p>
                <p>
                    <strong>Backend:</strong> Cloudflare Workers + Hono + Zod
                </p>
                <p>
                    <strong>Biblioteca:</strong> RSLib
                </p>
            </div>

            <div
                style={{
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    marginBottom: "2rem",
                }}
            >
                <h3>Resposta da API:</h3>
                <p
                    style={{
                        background: "#f5f5f5",
                        padding: "1rem",
                        borderRadius: "4px",
                        minHeight: "50px",
                    }}
                >
                    {loading ? "Carregando..." : response || "Clique em um botão para testar a API"}
                </p>
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <input
                    color="primary"
                    type="text"
                    placeholder="Digite seu nome (opcional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        marginRight: "1rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        width: "200px",
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
                <Button onClick={handleGet} disabled={loading} variant="primary">
                    GET /hello
                </Button>

                <Button onClick={handlePost} disabled={loading} variant="secondary">
                    POST /hello
                </Button>
            </div>
        </div>
    );
};

export default App;
