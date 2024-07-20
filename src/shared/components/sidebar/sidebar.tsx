const SideBarItems = [
    { name: 'Dashboard', icon: '', route: 'dashboard' },
    { name: 'Users', icon: '', route: 'user-list' },
    { name: 'Products', icon: '', route: 'product-list' },
    { name: 'Bookings', icon: '', route: 'booking-list' },
    { name: 'Master', icon: '', route: 'master-content' },
]

interface SidebarComponentProps {
    onToggle: () => void
}
const collapseStyle = {
    display: 'none',
    border: '1px solid red',
}
function SidebarComponent({ onToggle }: SidebarComponentProps) {
    return (
        <>
            <div className="sidebar-container shadow">sidebar</div>
        </>
    )
}

export default SidebarComponent
