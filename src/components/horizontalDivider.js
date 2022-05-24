export default function HorizontalDivider() {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-100" />
            </div>
        </div>
    )
}
