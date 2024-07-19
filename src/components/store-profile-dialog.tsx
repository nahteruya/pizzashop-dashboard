import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { getManagedRestaurnat } from "@/api/get-managed-restaurant";

import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const StoreProfileDialogSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileDialogType = z.infer<typeof StoreProfileDialogSchema>;

export function StoreProfileDoalog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managedRestaurant"],
    queryFn: getManagedRestaurnat,
  });

  const { register } = useForm<StoreProfileDialogType>({
    resolver: zodResolver(StoreProfileDialogSchema),
    values: {
      name: managedRestaurant?.name || "",
      description: managedRestaurant?.description || "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis aos seus
          clientes
        </DialogDescription>
      </DialogHeader>
      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-4" id="name" {...register("name")} />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-4"
              id="description"
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="ghost">
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
