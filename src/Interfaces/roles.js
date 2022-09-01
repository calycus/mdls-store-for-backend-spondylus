
const Roles = () => {
    const cardOptionAdministrator = [
        {
            name: "Encargado",
            function: "Add"
        },
        {
            name: "Encargado",
            function: "Update"
        },
        {
            name: "Producto / Servicio",
            function: "Add"
        },
        {
            name: "Producto / Servicio",
            function: "Update"
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