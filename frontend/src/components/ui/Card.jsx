export function Card({ children, className = "", ...props }) {
    return (
        <div
            className={`bg-white rounded-3xl shadow-xl border border-[#e2b9f9] ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className = "", ...props }) {
    return (
        <div
            className={`p-6 md:p-8 lg:p-10 text-center space-y-2 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardTitle({ children, className = "", ...props }) {
    return (
        <h3
            className={`text-3xl font-bold tracking-tighter text-[#4f0f69] ${className}`}
            {...props}
        >
            {children}
        </h3>
    );
}

export function CardDescription({ children, className = "", ...props }) {
    return (
        <p
            className={`text-gray-700 md:text-lg ${className}`}
            {...props}
        >
            {children}
        </p>
    );
}

export function CardContent({ children, className = "", ...props }) {
    return (
        <div
            className={`p-6 ${className}`} // Default padding, can be overridden
            {...props}
        >
            {children}
        </div>
    );
}
