$(document).ready(function() {
  $('#tableinformationbooth').DataTable({
    dom: 'Bfrtip',
    buttons: [
      'csv', 'excel', 'print', 'pdf',
    ],
    searching: true,
  });
});