"use client";

import { FeedsTableToolbar } from "@/components/admin/feeds/toolbar";
import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { FeedDto } from "@/generated/http-clients/backend/api";
import { useToast } from "@/hooks/use-toast";
import { QUERY_KEYS } from "@/lib/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useCallback } from "react";
import { getFeeds } from "./actions";
import { columns } from "./columns";
import { CreateFeedDialog } from "./create-dialog";

export default function FeedsPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: feeds, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.FEEDS],
    queryFn: getFeeds,
  });

  const handleCreateSuccess = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FEEDS] });
  }, [queryClient]);

  const table = useReactTable<FeedDto>({
    data: feeds || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-9 w-[200px]" />
          <Skeleton className="h-9 w-[150px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[400px] w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            RSS Feeds Management
          </h1>
          <p className="text-muted-foreground">
            Manage and monitor all RSS feed sources
          </p>
        </div>
        <CreateFeedDialog onSuccess={handleCreateSuccess} />
      </div>

      <div className="space-y-4">
        <FeedsTableToolbar table={table} />
        <DataTable<FeedDto, unknown>
          columns={columns}
          data={feeds || []}
          isLoading={isLoading}
          searchKey="provider"
          emptyMessage="No feeds found"
        />
        <DataTablePagination table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
