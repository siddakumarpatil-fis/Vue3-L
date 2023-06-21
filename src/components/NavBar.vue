<template>
    <v-card>
      <v-toolbar color="#62892f">
        <v-toolbar-title style="color:white">ToDo Demo</v-toolbar-title>
        <v-text-field
        hide-details
        single-line
      ></v-text-field>
        <v-btn right depressed flat color="white">
                    <v-icon color="white">mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="tab in tabs" v-bind:key="tab.id">
                <v-btn right depressed flat color="white" v-on:click="$router.push(tab.route)">
                   {{tab.text}}
                </v-btn>
        </v-toolbar-items>
<!--     
        <div v-if="!loggedIn">
                <v-btn right depressed flat color="white" v-on:click="$router.push('/login')">
                    <span>
                        Sign In 
                    </span>
                </v-btn>
            </div>
            <div v-else>
                <v-btn right depressed flat color="white" v-on:click="UserLogout">
                    <span>
                        Sign Out
                    </span>
                </v-btn>
            </div> -->
      </v-toolbar>
    </v-card>
  </template>

<script setup>
    const tabs = [
        { id: 0, text: 'TodoList', route: '/' },
                { id: 2, text: 'Help', route: 'help' },
                { id: 3, text: 'About', route: 'about' },
            ];
</script>

<style>
i.v-icon.v-icon {
  color: red;
} 
</style>