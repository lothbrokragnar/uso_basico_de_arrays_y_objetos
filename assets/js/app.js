const radio = [
    {hora: '11:00', medico: 'IGNACIO SCHULZ', nombre: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA',},
    {hora: '11:30', medico: 'FEDERICO SUBERCASEAUX', nombre: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE',},
    {hora: '15:00', medico: 'FERNANDO WURTHZ', nombre: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE',},
    {hora: '15:30', medico: 'ANA MARIA GODOY', nombre: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA',},
    {hora: '16:00', medico: 'PATRICIA SUAZO', nombre: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'}
];

const trauma = [
    {hora: '8:00',medico: 'MARIA PAZ ALTUZARRA',nombre: 'PAULA SANCHEZ',rut: '15554774-5',prevision: 'FONASA',},
    {hora: '10:00',medico: 'RAUL ARAYA',nombre: 'ANGÉLICA NAVAS',rut: '15444147-9',prevision: 'ISAPRE',},
    {hora: '10:30',medico: 'MARIA ARRIAGADA',nombre: 'ANA KLAPP',rut: '17879423-9',prevision: 'ISAPRE',},
    {hora: '11:00',medico: 'ALEJANDRO BADILLA',nombre: 'FELIPE MARDONES',rut: '1547423-6',prevision: 'ISAPRE',},
    {hora: '11:30',medico: 'CECILIA BUDNIK',nombre: 'DIEGO MARRE',rut: '16554741-K',prevision: 'FONASA',},
    {hora: '12:00',medico: 'ARTURO CAVAGNARO',nombre: 'CECILIA MENDEZ',rut: '9747535-8',prevision: 'ISAPRE',},
    {hora: '12:30',medico: 'ANDRES KANACRI',nombre: 'MARCIAL SUAZO',rut: '11254785-5',prevision: 'ISAPRE'}
];


const odonto = [
    {hora: '8:30',medico: 'ANDREA ZUÑIGA',nombre: 'MARCELA RETAMAL',rut: '11123425-6',prevision: 'ISAPRE',},
    {hora: '11:00',medico: 'MARIA PIA ZAÑARTU',nombre: 'ANGEL MUÑOZ',rut: '9878789-2',prevision: 'ISAPRE',},
    {hora: '11:30',medico: 'SCARLETT WITTING',nombre: 'MARIO KAST',rut: '7998789-5',prevision: 'FONASA',},
    {hora: '13:00',medico: 'FRANCISCO VON TEUBER',nombre: 'KARIN FERNANDEZ',rut: '18887662-K',prevision: 'FONASA',},
    {hora: '13:30',medico: 'EDUARDO VIÑUELA',nombre: 'HUGO SANCHEZ',rut: '17665461-4',prevision: 'FONASA',},
    {hora: '14:00',medico: 'RAQUEL VILLASECA',nombre: 'ANA SEPULVEDA',rut: '14441281-0',prevision: 'ISAPRE'}
];

// RADIO
let datos_radio = 
`<h3>Radiología</h3>
<tr> 
<th>Hora de reserva</th> 
<th>Doctor</th> 
<th>Paciente</th> 
<th>Rut del paciente</th> 
<th>Previsión del paciente</th> 
</tr>`

for (let i = 0; i < radio.length; i++) {

    datos_radio += 
                `<tr>
                <td>${radio[i].hora}</td>
                <td>${radio[i].medico}</td>
                <td>${radio[i].nombre}</td>
                <td>${radio[i].rut}</td>
                <td>${radio[i].prevision}</td>
                </tr>`;
}
document.getElementById("texto_radio").innerHTML = `<strong>Primera atención</strong>: ${radio[0].nombre} - ${radio[0].prevision} | <strong>Última atención</strong>: ${radio[(radio.length-1)].nombre} - ${radio[(radio.length-1)].prevision}`
document.getElementById("table_radio").innerHTML = datos_radio;


// TRAUMA
let datos_trauma =
    "<h3>Traumatología</h3><tr> <th>Hora de reserva</th> <th>Doctor</th> <th>Paciente</th> <th>Rut del paciente</th> <th>Previsión del paciente</th> </tr>"
for (let j = 0; j < trauma.length; j++) {
    datos_trauma += 
                `<tr>
                <td>${trauma[j].hora}</td>
                <td>${trauma[j].medico}</td>
                <td>${trauma[j].nombre}</td>
                <td>${trauma[j].rut}</td>
                <td>${trauma[j].prevision}</td>
                </tr>`;
}
document.getElementById("texto_trauma").innerHTML = `<strong>Primera atención</strong>: ${trauma[0].nombre} - ${trauma[0].prevision} | <strong>Última atención</strong>: ${trauma[(trauma.length-1)].nombre} - ${trauma[(trauma.length-1)].prevision}`
document.getElementById("table_trauma").innerHTML = datos_trauma;

// ODONTO
let datos_odonto =
    "<h3>Dental</h3> <tr> <th>Hora de reserva</th> <th>Doctor</th> <th>Paciente</th> <th>Rut del paciente</th> <th>Previsión del paciente</th> </tr>"

for (let k = 0; k < odonto.length; k++) {
    datos_odonto += 
                `<tr>
                <td>${odonto[k].hora}</td>
                <td>${odonto[k].medico}</td>
                <td>${odonto[k].nombre}</td>
                <td>${odonto[k].rut}</td>
                <td>${odonto[k].prevision}</td>
                </tr>`;
}
document.getElementById("texto_odonto").innerHTML = `<strong>Primera atención</strong>: ${odonto[0].nombre} - ${odonto[0].prevision} | <strong>Última atención</strong>: ${odonto[(odonto.length-1)].nombre} - ${odonto[(odonto.length-1)].prevision}`
document.getElementById("table_odonto").innerHTML = datos_odonto;