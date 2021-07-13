import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import loginPage from "../views/login-form.vue";
import tickets from "../views/ticketsolve.vue";
import ticket from "../views/ticket.vue";
import reports from "../views/report.vue";
import indiContacts from "../views/individualContacts.vue";
import helpDeskInDepth from "../views/HelpDeskInDepth.vue";
import ticketvolume from "../views/ticketsVolumeTrents.vue";
import agentPerfomance from "../views/AgentPerfomance.vue";
import groupPerfomance from "../views/GroupPerfomance.vue";
import perfomanceAnalysis from "../views/PerfomanceAnalysis.vue";
import editContact from "../components/contacts/editContact.vue";
import editCompany from "../components/contacts/editCompany.vue";
import comContacts from "../views/comContacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit/:contact_id",
    name: "editContact",
    component: editContact,
  },
  {
    path: "/editcompany/:company_id",
    name: "editCompany",
    component: editCompany,
  },
  {
    path: "/",
    name: "loginPage",
    component: loginPage,
    meta: { hideSideBar: true },
  },
  {
    path: "/report",
    name: "report",
    component: reports,
  },
  {
    path: "/individualContacts",
    name: "individualContacts",
    component: indiContacts,
  },
  {
    path: "/ticket",
    name: "report",
    component: ticket,
  },
  {
    path: "/ticketsolve",
    name: "ticketsolve",
    component: tickets,
  },
  {
    path: "/HelpDeskInDepth",
    name: "HelpDeskInDepth",
    component: helpDeskInDepth,
  },
  {
    path: "/GroupPerfomance",
    name: "GroupPerfomance",
    component: groupPerfomance,
  },
  {
    path: "/PerfomanceAnalysis",
    name: "PerfomanceAnalysis",
    component: perfomanceAnalysis,
  },
  {
    path: "/AgentPerfomance",
    name: "AgentPerfomance",
    component: agentPerfomance,
  },
  {
    path: "/TicketVolume",
    name: "TicketVolume",
    component: ticketvolume,
  },
  {
    path: "/TicketVolume",
    name: "TicketVolume",
    component: ticketvolume,
  },
  {
    path: "/comContacts",
    name: "comContacts",
    component: comContacts,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
