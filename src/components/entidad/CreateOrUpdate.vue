<template>
<div>
    <h2>{{ pageTitle }}</h2>
    <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm">
      <el-form-item label="Nombre" prop="nombre">
        <el-input v-model="form.nombre"></el-input>
      </el-form-item>
      <el-form-item label="Ruc" prop="ruc">
        <el-input v-model="form.ruc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="save" type="primary">Guardar</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
  name: "EntidadCreateOrUpdate",
  data() {
    return {
      loading: false,
      form: {
        entidadid: 0,
        nombre: null,
        ruc: null,
        direccion: null
      },
      rules: {
      }
    };
  },
  computed: {
    pageTitle() {
      return this.form.entidadid === 0 ? "Nueva Entidad" : `${this.form.ruc}, ${this.form.nombre}`;
    }
  },
  created() {
    let self = this;
    self.get(self.$route.params.id);
  },
  methods: {
    get(id) {
      if(id == undefined) return;

      let self = this;

      self.loading = true;
      self.$store.state.services.entidadService
        .get(id)
        .then(r => {
          self.loading = false;
          self.form.entidadid = r.data.entidadid;
          self.form.nombre = r.data.nombre;
          self.form.ruc = r.data.ruc;
          self.form.direccion = r.data.direccion;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    save() {
      let self = this;
      self.$refs["ruleForm"].validate(valid => {
        if (valid) {
          self.loading = true;

          if(self.form.studentId > 0) {
            self.$store.state.services.entidadService
            .update(self.form)
            .then(r => {
              self.loading = false;
              self.$router.push('/entidad');
            })
            .catch(r => {
              self.$message({
                message: "Ocurrió un error inesperado",
                type: "error"
              });
            });
          } else {
            self.$store.state.services.entidadService
              .add(self.form)
              .then(r => {
                self.loading = false;
                self.$router.push('/entidad');
              })
              .catch(r => {
                self.$message({
                  message: "Ocurrió un error inesperado",
                  type: "error"
                });
              });
          }
        }
      });
    }
  }
};
</script>