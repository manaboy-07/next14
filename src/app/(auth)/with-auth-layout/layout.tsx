export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return(
        <div>
            <h2>
                Inner Layout for only Login and Register Pages
            </h2>
            {children}
        </div>
    )
}