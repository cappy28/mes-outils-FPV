import { animate } from "animejs";
import {
  escapeHTML,
  formatNumber,
  getNumericInput,
  prefersReducedMotion,
  qs,
  qsa
} from "../utils.js";

const tools = [
  {
    id: "battery",
    index: "01",
    name: "Autonomie",
    title: "Calculateur batterie",
    description:
      "Énergie disponible, puissance moyenne et autonomie théorique corrigée.",
    fields: [
      {
        name: "voltage",
        label: "Tension moyenne du pack",
        unit: "V",
        value: 22.2,
        min: 1,
        max: 60,
        step: 0.1
      },
      {
        name: "capacity",
        label: "Capacité",
        unit: "mAh",
        value: 1300,
        min: 100,
        max: 30000,
        step: 50
      },
      {
        name: "current",
        label: "Consommation moyenne",
        unit: "A",
        value: 28,
        min: 0.1,
        max: 500,
        step: 0.1
      },
      {
        name: "usable",
        label: "Capacité réellement utilisée",
        unit: "%",
        value: 80,
        min: 20,
        max: 100,
        step: 1
      }
    ],
    calculate(form) {
      const voltage = getNumericInput(form, "voltage");
      const capacityAh = getNumericInput(form, "capacity") / 1000;
      const current = Math.max(getNumericInput(form, "current"), 0.01);
      const usable = getNumericInput(form, "usable") / 100;

      const energy = voltage * capacityAh;
      const theoretical = (capacityAh / current) * 60;
      const practical = theoretical * usable;
      const power = voltage * current;

      return [
        { label: "Énergie nominal
