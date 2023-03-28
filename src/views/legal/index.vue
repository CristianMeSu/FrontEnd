<template>
    <div>

        <Navbar />
        <NavbarSideBar />

        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">
                                Contratos
                            </h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <div class="content">
                <div class="card">
                    <div class="row">
                        <div class="col-12 alert">
                            <div class="row">
                                <div class="col-md-1">Fecha</div>
                                <div class="col-md-1"><input type="datetime-local" class="form-control"></div>

                                <div class="col-md-1">Clave</div>
                                <div class="col-md-1"><input class="form-control"></div>

                                <div class="col-md-1">Entidad</div>
                                <div class="col-md-1"><input class="form-control"></div>

                                <div class="col-md-2 ">
                                    <input type="checkbox" id="inicial" class="" >
                                    <label for="inicial"> Inicial</label>
                                </div>

                                <div class="col-md-2">
                                    <input type="checkbox" id="renovacion" class="">
                                    <label for="renovacion"> Renovación</label>
                                </div>

                                <div class="col-md-2">
                                    <input type="checkbox" id="expansion" class="">
                                    <label for="expansion"> Expansión</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active show" id="v-pills-general-tab" data-toggle="pill" href="#v-pills-general" role="tab" aria-controls="v-pills-general" aria-selected="true">General</a>
                                <a class="nav-link" id="v-pills-garantia-tab" data-toggle="pill" href="#v-pills-garantia" role="tab" aria-controls="v-pills-garantia" aria-selected="false">Garantía</a>
                                <a class="nav-link" id="v-pills-contenido-tab" data-toggle="pill" href="#v-pills-contenido" role="tab" aria-controls="v-pills-contenido" aria-selected="false">Contenido</a>
                                <a class="nav-link" id="v-pills-bancaria-tab" data-toggle="pill" href="#v-pills-bancaria" role="tab" aria-controls="v-pills-bancaria" aria-selected="false">Bancaria</a>
                                <a class="nav-link" id="v-pills-adicional-tab" data-toggle="pill" href="#v-pills-adicional" role="tab" aria-controls="v-pills-adicional" aria-selected="false">Adicional</a>
                                <a class="nav-link" id="v-pills-autorizacion-tab" data-toggle="pill" href="#v-pills-autorizacion" role="tab" aria-controls="v-pills-autorizacion" aria-selected="false">Autorización</a>
                            </div>
                        </div>
                        <div class="col-10">
                            <div class="tab-content" id="v-pills-tabContent">

                                <div class="tab-pane fade active show" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab">
                                    <h2>Datos de facturación</h2>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="generalNombreCliente">Nombre del cliente: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="generalNombreCliente" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="generalCalleNumero">Calle y número: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="generalCalleNumero" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-1">
                                            <label for="generalColonia">Colonia: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" id="generalColonia" class="form-control">
                                        </div>
                                        <div class="col-md-1">
                                            <label for="generalCP" style="margin-left: 1em ;">C.P.: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" id="generalCP" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-1">
                                            <label for="generalPais">País: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <select name="" id="generalPais" class="form-control">
                                                <option value="">México</option>
                                                <option value="">Estados Unidos</option>
                                            </select>
                                        </div>
                                        <div class="col-md-1">
                                            <label for="generalCiudad" style="margin-left: 1em ;">Ciudad: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" id="generalCiudad" class="form-control">
                                        </div>
                                    </div>

                                </div>



                                <div class="tab-pane fade show" id="v-pills-garantia" role="tabpanel" aria-labelledby="v-pills-garantia-tab">
                                    <h2>Datos de garantía</h2>

                                    <div class="row">
                                        <div class="col-md-3 ">
                                            <input type="checkbox" id="garantiaCartaGarantia" class="" >
                                            <label for="garantiaCartaGarantia"> Carta de Garantía: </label>
                                        </div>

                                        <div class="col-md-3">
                                            <input type="checkbox" id="garantiaCartaCredito" class="">
                                            <label for="garantiaCartaCredito"> Carta de Crédito:</label>
                                        </div>

                                        <div class="col-md-3">
                                            <input type="checkbox" id="garantiaObligadoSolidario" class="">
                                            <label for="garantiaObligadoSolidario"> Obligado Soldiario: </label>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <input type="checkbox" id="garantiaOtros" class="">
                                                    <label for="garantiaOtros"> Otros</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="text" id="garantiaOrosText" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="garantiaNombreGarante">Nombre del garante: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="garantiaNombreGarante" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="garantiaCalleNumero">Calle y número: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="garantiaCalleNumero" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-1">
                                            <label for="garantiaEmail">Email: </label>
                                        </div>

                                        <div class="col-md-5">
                                            <input type="email" id="garantiaEmail" class="form-control">
                                        </div>

                                        <div class="col-md-1">
                                            <label for="garantiaTelefono">Teléfono: </label>
                                        </div>

                                        <div class="col-md-5">
                                            <input type="tel" id="garantiaTelefono" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-1">
                                            <label for="garantiaColonia">Colonia: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" id="garantiaColonia" class="form-control">
                                        </div>
                                        <div class="col-md-1">
                                            <label for="garantiaCP" style="margin-left: 1em ;">C.P.: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" id="garantiaCP" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-1">
                                            <label for="garantiaPais">País: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <select name="" id="garantiaPais" class="form-control">
                                                <option value="">México</option>
                                                <option value="">Estados Unidos</option>
                                            </select>
                                        </div>
                                        <div class="col-md-1">
                                            <label for="garantiaCiudad" style="margin-left: 1em ;">Ciudad: </label>
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" id="garantiaCiudad" class="form-control">
                                        </div>
                                    </div>


                                </div>

                                <div class="tab-pane fade show" id="v-pills-contenido" role="tabpanel" aria-labelledby="v-pills-contenido-tab">
                                    <h2>Información de contrato</h2>

                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDatosEscritura">Datos de la escritura: </label>
                                                </div>
                                                <div class="col-md-10">
                                                    <input type="text" id="contenidoDatosEscritura" class="form-control">
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoFechaFirmaContrato">Fecha firma de contrato: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoFechaFirmaContrato" class="form-control">
                                                </div>
                                                <div class="col-lg-2"></div>
                                                <div class="col-md-2">
                                                    <label for="contenidoFechaFirmaContratoClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoFechaFirmaContratoClausula" class="form-control">
                                                </div>
                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Vigencia</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoVigenciaFechaInicio">Fecha inicio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoVigenciaFechaInicio" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoVigenciaFechaFinal">Fecha final: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="datetime-local" id="contenidoVigenciaFechaFinal" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoVigenciaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoVigenciaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Período de gracia:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoPeriodoGraciaFechaInicio">Fecha inicio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoPeriodoGraciaFechaInicio" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoPeriodoGraciaFechaFinal">Fecha final: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoPeriodoGraciaFechaFinal" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoPeriodoGraciaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoPeriodoGraciaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Período de facturación:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoFacturacionFechaInicio">Fecha inicio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="datetime-local" id="contenidoFacturacionFechaInicio" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoFacturacionFechaFinal">Fecha final: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoFacturacionFechaFinal" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoFacturacionClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoFacturacionClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Medida del edificio ocupado:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoMedidasEdificioOcupadoSQFT">SQFT: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoMedidasEdificioOcupadoSQFT" class="form-control">
                                                </div>
                                                <div class="col-md-2">
                                                    <label for="contenidoMedidasEdificioOcupadoOcupacionParcial">Ocupación parcial: </label>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <input type="radio" name="contenidoMedidasEdificioOcupadoOcupacionParcial" style="margin-right: 1em ;" class=""> Sí
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="radio" name="contenidoMedidasEdificioOcupadoOcupacionParcial" style="margin-right: 1em ;" class=""> No
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoMedidasEdificioOcupadoClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoMedidasEdificioOcupadoClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Renta de la propiedad:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoRentaPropiedadRentaMensual">Fecha inicio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoRentaPropiedadRentaMensual" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoRentaPropiedadPrecioSQFT">Precio SQFT: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoRentaPropiedadPrecioSQFT" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoRentaPropiedadClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoRentaPropiedadClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Depósito en garantía:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaImporte">Importe: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaFecha">Fecha: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoDepositoGarantiaFecha" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaMesesRenta">Meses de renta: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaMesesRenta" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Anticipo de renta:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaImporte">Importe: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaImporte" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaAmortizacionMensual">Amortización mensual: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaAmortizacionMensual" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaClausula" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaFechaInicial">Fecha inicial: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaFechaInicial" class="form-control">
                                                </div>
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaFechaFinal">Fecha final: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaFechaFinal" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Incrementos por inflación:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaFechaInicial">Fecha inicial: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaFechaInicial" class="form-control">
                                                </div>
                                                <div class="col-md-4"></div>
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoAnticipoRentaFechaInicial">Base de aplicación: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="checkbox" id="contenidoAnticipoRentaFechaInicial" class=""> CPI
                                                    <input type="checkbox" id="contenidoAnticipoRentaFechaInicial" class=""> INPC
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Otros:</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaFechaInicial">Triple Net: </label>
                                                </div>
                                                <div class="col-md-7">
                                                    <input type="checkbox" name="contenidoOtros" class=""> Seguro
                                                    <input type="checkbox" name="contenidoOtros" class=""> Predial
                                                    <input type="checkbox" name="contenidoOtros" class=""> Mantenimiento
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaFechaInicial">CAM fee: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="checkbox" name="contenidoOtros" class=""> Sí
                                                    <input type="checkbox" name="contenidoOtros" class=""> No
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaClausula">Importe: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaClausula" class="form-control">
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoAnticipoRentaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoAnticipoRentaClausula" class="form-control">
                                                </div>

                                                <div class="col-md-2">
                                                    <label for="contenidoAnticipoRentaClausula">Fecha de inicio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoAnticipoRentaClausula" class="form-control">
                                                </div>

                                            </div>

                                        </div>




                                    </div>
                                </div>

                                <div class="tab-pane fade show" id="v-pills-bancaria" role="tabpanel" aria-labelledby="v-pills-bancaria-tab">

                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Moneda</h3>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaImporte">Moneda del contrato: </label>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Dólares
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Pesos
                                                </div>

                                                 <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaImporte">Moneda del contrato: </label>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Dólares
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Pesos
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Banco a depositar</h3>
                                            </div>

                                            <div class="row">

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Nombre del banco: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Cuenta bancaria: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Cláusula: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Clabe: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Código Swift: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Beneficiario: </label>
                                                </div>
                                                <div class="col-md-11">
                                                    <input type="text" id="contenidoDepositoGarantiaClausula" class="form-control">
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>





                                <div class="tab-pane fade show" id="v-pills-adicional" role="tabpanel" aria-labelledby="v-pills-adicional-tab">

                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Tipo de edificio: </label>
                                                </div>
                                                <div class="col-md-10">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Ligera
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Mediana
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Pesada
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label for="contenidoDepositoGarantiaClausula">Giro de la empresa o industria: </label>
                                                </div>
                                                <div class="col-md-4">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Otro: </label>
                                                </div>
                                                <div class="col-md-4">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Tipo de edificio: </label>
                                                </div>
                                                <div class="col-md-5">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Convenio de seguros
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Convenio de incentivos
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Otros
                                                </div>

                                                <div class="col-md-5">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control" placeholder="Especificar otros">
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Fecha de entrega de edificio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>

                                                <div class="col-md-2"></div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Inicial: </label>
                                                </div>
                                                <div class="col-md-4">
                                                    <input type="date" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row" style="margin-top: 2em ;">
                                                <h3>Renovación de contrato</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Fecha: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>

                                                <div class="col-md-2"></div>

                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Días para avisar: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="number" id="contenidoDepositoGarantiaImporte" class="form-control">
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Opciones de renovación: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Sí
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> No
                                                </div>

                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Especificar: </label>
                                                </div>
                                                <div class="col-md-5">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control" >
                                                </div>


                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Estudio ambiental fase 1: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Sí
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> No
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Tipo: </label>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control" >
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Quién lo hizo: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control" >
                                                </div>


                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Fecha devolución del edificio: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="date" id="contenidoDepositoGarantiaImporte" class="form-control" >
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Leyes aplicables: </label>
                                                </div>
                                                <div class="col-md-10">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control" >
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Jurisdicción: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Tribunales
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Arbitraje
                                                </div>

                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Tipo: </label>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" id="contenidoDepositoGarantiaImporte" class="form-control" >
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="contenidoDepositoGarantiaClausula">Cuenta con abandono de sitio del inquilino anterior: </label>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> Sí
                                                    <input type="checkbox" id="contenidoDepositoGarantiaImporte" class=""> No
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-1">
                                                    <label for="contenidoDepositoGarantiaClausula">Notas:</label>
                                                </div>
                                                <div class="col-md-11"><textarea class="form-control"></textarea></div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label for="contenidoDepositoGarantiaClausula">Documentos asociados:</label>
                                                </div>
                                                <div class="col-md-7">
                                                    <input type="text" class="form-control">
                                                </div>
                                                <div class="col-md-3">
                                                    <label>Si es que está prometido.</label>
                                                </div>
                                            </div>


                                        </div>



                                    </div>


                                </div>





                                <div class="tab-pane fade show" id="v-pills-autorizacion" role="tabpanel" aria-labelledby="v-pills-autorizacion-tab">
                                    <h2>Autorización</h2>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="generalNombreCliente">Nombre de quien elaboró: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="generalNombreCliente" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="generalCalleNumero">Nombre de quien revisó: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="generalCalleNumero" class="form-control">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-2">
                                            <label for="generalCalleNumero">Nombre de quien autorizó: </label>
                                        </div>

                                        <div class="col-md-10">
                                            <input type="text" id="generalCalleNumero" class="form-control">
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Navbar from "@/components/navbar/Navbar";
    import NavbarSideBar from "@/components/navbar/NavbarSidebar";

    export default {
        name: "index"

        , components: {
            Navbar
            , NavbarSideBar
        }
    }
</script>

<style scoped>

    input[ type="checkbox" ] {
        margin-left: 1em ;
        margin-right: 1em ;
    }

    #v-pills-tabContent input, #v-pills-tabContent label, select {
        margin-top: 1em ;
    }

</style>