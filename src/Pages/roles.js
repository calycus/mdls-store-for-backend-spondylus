
const Roles = () => {
    const cardOptionAdministrator = [
        {
            name: "Encargado",
            action: "Add",
            rol: "Admin"
        },
        {
            name: "Encargado",
            action: "Update",
            rol: "Admin"
        },
        {
            name: "Producto / Servicio",
            action: "Add",
            rol: "Admin"
        },
        {
            name: "Producto / Servicio",
            action: "Update",
            rol: "Admin"
        },
    ]
    const cardOptionManager = [
        {
            name: "Nuevo Cliente",
            action: "Add",
            rol: "Manager"
        },
        {
            name: "Nueva Factura",
            action: "Generate",
            rol: "Manager"
        },
        {
            name: "Buscar Factura",
            action: "Search",
            rol: "Manager"
        },
        {
            name: "Producto / Servicio",
            action: "Search",
            rol: "Manager"
        },
    ]

    const cardOptionAccounting = [
        { name: "Lista de Facturas" },
        { name: "Gráfico Contable" },
        { name: "Cuentas Bancarias" },
        { name: "Transacciones" }
    ]

    const cardOptionForMedicine = [
        { name: "Agendar Cita" },
        { name: "Consultar Cita" },
    ]

    return (
        {
            cardOptionAdministrator: cardOptionAdministrator,
            cardOptionManager: cardOptionManager,
            cardOptionAccounting: cardOptionAccounting,
            cardOptionForMedicine: cardOptionForMedicine
        }
    )
}

export default Roles