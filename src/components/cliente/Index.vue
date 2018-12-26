<template>
  <div>
    <h2>Clientes</h2>
    <el-table v-loading="loading" :data="info" style="width: 100%">
      <el-table-column prop="nombre" label="Nombre" sortable>
        <template slot-scope="scope">{{ scope.row.CliNom }}</template>
      </el-table-column>
      <el-table-column prop="direccion" label="Direccion" width="500" sortable>
        <template slot-scope="scope">{{ scope.row.CliDir }}</template>
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button type="danger" @click="remove(scope.row.CliId)">Eliminar</el-button>
          <el-button @click="$router.push(`/cliente/${scope.row.CliId}/edit`)">Editar</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="traertodo" aria-label="Cargar">Cargar</el-button>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClienteIndex",
  data() {
    return {
      info: [],
      loading: false
    };
  },
  created() {
    let self = this;
    self.traertodo();
  },
  methods: {
    traertodo() {
      let self = this;

      axios.get("http://192.168.23.190:9000/cliente").then(r => {
        self.info = r.data;
      });
      //self.loading = true;

      alert("lo mismo");
    },
    remove(id) {
      let self = this;

      self
        .$confirm("Esta seguro de realizar esta acción?", "Confirmación", {
          confirmButtonText: "Si",
          cancelButtonText: "Cancelar",
          type: "warning"
        })
        .then(() => {
          _remove();
        })
        .catch(() => {});

      function _remove() {
        self.$store.state.services.clienteService
          .remove(id)
          .then(r => {
            self.loading = false;
            self.getAll();
          })
          .catch(r => {
            self.$message({
              message: "Ocurrió un error inesperado",
              type: "error"
            });
          });
      }
    }
  }
};
</script>