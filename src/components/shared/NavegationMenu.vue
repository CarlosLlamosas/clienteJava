<template>
<el-menu default-active="0">
    <template v-for="item, i in items">
        <el-submenu :index="i.toString()" v-if="item.children !== undefined">
            <template slot="title">
                <i :class="'fa fa-' + item.icon"></i>
                <span>{{ item.text }}</span>
            </template>
            <el-menu-item-group title="Opciones">
                <el-menu-item v-for="child, c in item.children" :index="(i.toString() + c)" @click="redirect(child.path)">
                    <i :class="'fa fa-' + child.icon"></i> <span>{{ child.text }}</span>
                </el-menu-item>
            </el-menu-item-group>    
        </el-submenu>
        <el-menu-item index="2" v-if="item.children === undefined" @click="redirect(item.path)">
            <i :class="'fa fa-' + item.icon"></i>
            <span>{{ item.text }}</span>
        </el-menu-item>
    </template>
</el-menu>
</template>

<script>
export default {
  name: "NavegationMenu",
  data: () => ({
    items: [
      { icon: "user", text: "Cliente", children: [
          { icon: "plus", text: "Agregar", path: "/Cliente/add" },
          { icon: "list", text: "Listar", path: "/Cliente" },
        ]
      },
      {
        icon: "address-book",
        text: "Entidades",
        children: [
          { icon: "plus", text: "Agregar", path: "/Entidad/add" },
          { icon: "list", text: "Listar", path: "/Entidad" },
        ]
      },
      {
        icon: "star",
        text: "Prestamo",
        children: [
          { icon: "plus", text: "Agregar", path: "/Prestamo/add" },
          { icon: "list", text: "Listar", path: "/Prestamo" },
        ]
      },
      {
        icon: "wrench",
        text: "Usuarios",
        children: [
          { icon: "plus", text: "Agregar", path: "/Usuario/add" },
          { icon: "list", text: "Listar", path: "/Usuario" },
        ]
      },
      {
        icon: "users",
        text: "Tipo de Cliente",
        children: [
          { icon: "plus", text: "Agregar", path: "/TipoCliente/add" },
          { icon: "list", text: "Listar", path: "/TipoCliente" },
        ]
      }
    ]
  }),
  methods: {
    redirect(path) {
      if(path === undefined) return;
      this.$router.push(path);
    }
  }
};
</script>