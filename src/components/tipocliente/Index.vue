<template>
<div>
    <h2>Tipo de Clientes</h2>
    <el-table v-loading="loading" :data="data" style="width: 100%">
        <el-table-column prop="nombre" label="Codigo" sortable>
          <template slot-scope="scope">
            {{ scope.row.nombre }}, {{ scope.row.alias }}
          </template>
        </el-table-column>
        <el-table-column prop="direccion" label="Descripcion" width="500" sortable></el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button type="danger" @click="remove(scope.row.usuarioid)">Eliminar</el-button>
            <el-button @click="$router.push(`/usuario/${scope.row.usuarioid}/edit`)">Editar</el-button>
          </template>
        </el-table-column>
      </el-table>
</div>
</template>

<script>
export default {
  name: "UsuarioIndex",
  data() {
    return {
      data: [],
      loading: false
    };
  },
  created() {
    let self = this;
    //self.getAll();
  },
  methods: {
    getAll() {
      let self = this;

      self.loading = true;

      self.$store.state.services.usuarioService
        .getAll()
        .then(r => {
          self.loading = false;
          self.data = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
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
        self.$store.state.services.usuarioServicev
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