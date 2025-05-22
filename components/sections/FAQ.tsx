"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-[#e3f2fd]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5e6472] mb-8 text-center">Ficou alguma dúvida?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80">
            <Image
              src="/image/People with questions illustration.png"
              alt="People with questions illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Quais serviços são oferecidos pela clínica veterinária da PetLife?",
                  answer:
                    "A clínica da PetLife oferece uma ampla gama de serviços, incluindo consultas de rotina, vacinação, cirurgias, tratamento de doenças, cuidados odontológicos, atendimento de emergência 24 horas, programas de prevenção de doenças, consultas e exames, entre outros. Todos os serviços são realizados com atendimento personalizado para garantir a saúde e o bem-estar do seu pet.",
                },
                {
                  question: "Quais espécies de animais a clínica veterinária atende?",
                  answer:
                    "A clínica veterinária da PetLife atende diversas espécies de animais domésticos, incluindo cães, gatos, aves, roedores e pequenos mamíferos.",
                },
                {
                  question: "A clínica veterinária da PetLife possui serviços de emergência?",
                  answer:
                    "Sim, a PetLife oferece serviços de emergência 24 horas por dia, 7 dias por semana, para garantir que seu pet receba cuidados imediatos em situações críticas.",
                },
                {
                  question: "A clínica oferece serviços de banho e tosa?",
                  answer:
                    "Sim, a PetLife oferece serviços completos de banho e tosa, incluindo banhos medicamentosos, tosa higiênica, tosa completa e cuidados estéticos para seu pet.",
                },
              ].map((item, index) => (
                <div key={index} className="border border-[#b5d8eb] rounded-md mb-4 last:mb-0">
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="px-4 text-[#5e6472] hover:text-[#f7cac9] hover:no-underline transition-colors duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-[#5e6472]">{item.answer}</AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
