
const Roles = () => {
    const cardOptionAdministrator = [
        {
            name: "Encargado",
            action: "Add"
        },
        {
            name: "Encargado",
            action: "Update"
        },
        {
            name: "Producto / Servicio",
            action: "Add"
        },
        {
            name: "Producto / Servicio",
            action: "Update"
        },
    ]
    const cardOptionManager = [
        { name: "Nuevo Cliente" },
        { name: "Nueva Factura" },
        { name: "Buscar Factura" },
        { name: "Buscar Producto/Servicio" }
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