<template>
<div>
    <h2>{{ pageTitle }}</h2>
    <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm">
      <el-form-item label="Nombre" prop="nombre">
        <el-input v-model="form.CliNom"></el-input>
      </el-form-item>
      <el-form-item label="Apellido" prop="apellido">
        <el-input v-model="form.CliApe"></el-input>
      </el-form-item>
      <el-form-item label="CI" prop="ruc">
        <el-input v-model="form.CliCI"></el-input>
      </el-form-item>
      <el-form-item label="Fecha NAcimiento" prop="fecha">
        <el-input type="date" v-model="form.CliFechNac"></el-input>
      </el-form-item>
      <el-form-item label="Direccion" prop="bio">
        <el-input  v-model="form.CliDir"></el-input>
      </el-form-item>
      <el-form-item label="Telefono" prop="bio">
        <el-input  v-model="form.CliTel"></el-input>
      </el-form-item>
      <el-form-item label="Observacion" prop="bio">
        <el-input type="textarea" v-model="form.Observacion"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="save" type="primary">Guardar</el-button>
      </el-form-item>
    </el-form>
    <pre>{{from}}</pre>
</div>
</template>

<script>
import axios from "axios"
var url="http://192.168.23.190:9000/cliente";
export default {
  name: "StudentCreateOrUpdate",
  data() {
    return {
      loading: false,
      form: {
        CliId:0,
        CliCI:"",
        CliNom:"",
        CliApe:"",
        CliDir:"",
        CliTel:"",
        CliTipCliId:1,
        CliCantHijos:0,
        CliFechNac:Date.now(),
        Observacion:""
        }
      ,
      rules: {
        
      }
    };
  },
  computed: {
    pageTitle() {
      return this.form.clienteid === 0 ? "Nuevo Cliente" : `${this.form.CliApe}, ${this.form.CliNom}`;
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
      axios.get(url.concat("/"+id)).then(r => {
        this.form = r.data;
      });
      self.loading=false
      
      
    },
    save() {
      let self = this;
      self.loading = true;
alert(this.form.CliId)
      if(this.form.CliId > 0) {
        alert('entra')
          axios.put(url,this.from)
        .then(r=>{$route.push('/Cliente')})
        .catch(function (error){alert(error)});
      } else {
        this.$store.state.services.clienteService
          .add(self.form)
          .then(r => {
            self.loading = false;
            self.$router.push('/cliente');
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