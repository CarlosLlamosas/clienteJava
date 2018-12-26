<template>
<div>
    <h2>{{ pageTitle }}</h2>
    <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm">
      <el-form-item label="Codigo" prop="nombre">
        <el-input v-model="form.nombre"></el-input>
      </el-form-item>
      <el-form-item label="Descripcion" prop="alias">
        <el-input v-model="form.alias"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="save" type="primary">Guardar</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
  name: "UsuarioCreateOrUpdate",
  data() {
    return {
      loading: false,
      form: {
        usuarioid: 0,
        nombre: null,
        alias: null,
        bio: null
      },
      rules: {
      }
    };
  },
  computed: {
    pageTitle() {
      return this.form.usuarioid === 0 ? "Nuevo Tipo Cliente" : `${this.form.alias}, ${this.form.nombre}`;
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
      self.$store.state.services.usuarioService
        .get(id)
        .then(r => {
          self.loading = false;
          self.form.usuarioid = r.data.usuarioid;
          self.form.nombre = r.data.nombre;
          self.form.alias = r.data.alias;
          self.form.bio = r.data.bio;
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

          if(self.form.usuarioid > 0) {
            self.$store.state.services.usuarioService
            .update(self.form)
            .then(r => {
              self.loading = false;
              self.$router.push('/usuario');
            })
            .catch(r => {
              self.$message({
                message: "Ocurrió un error inesperado",
                type: "error"
              });
            });
          } else {
            self.$store.state.services.usuarioService
              .add(self.form)
              .then(r => {
                self.loading = false;
                self.$router.push('/usuario');
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