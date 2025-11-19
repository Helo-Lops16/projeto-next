import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gradient-to-br from-background to-muted/30">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="hover:bg-accent transition-colors rounded-lg p-2" />
            <Separator orientation="vertical" className="mr-2 h-6" />
            <Breadcrumb>
              <BreadcrumbList className="text-sm text-muted-foreground">
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-foreground">
                    Data Fetching
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Cards superiores */}
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-card shadow-sm border p-4 flex items-center justify-center text-muted-foreground">
              Card 1
            </div>
            <div className="aspect-video rounded-xl bg-card shadow-sm border p-4 flex items-center justify-center text-muted-foreground">
              Card 2
            </div>
            <div className="aspect-video rounded-xl bg-card shadow-sm border p-4 flex items-center justify-center text-muted-foreground">
              Card 3
            </div>
          </div>

          {/* Conteúdo inferior */}
          <div className="min-h-[60vh] rounded-xl bg-card shadow-sm border p-6">
            <p className="text-muted-foreground">
              Conteúdo principal...
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
