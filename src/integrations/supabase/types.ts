export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_action_logs: {
        Row: {
          action_type: string
          admin_user_id: string
          comparison_id: string | null
          created_at: string
          details: Json | null
          id: string
        }
        Insert: {
          action_type: string
          admin_user_id: string
          comparison_id?: string | null
          created_at?: string
          details?: Json | null
          id?: string
        }
        Update: {
          action_type?: string
          admin_user_id?: string
          comparison_id?: string | null
          created_at?: string
          details?: Json | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_action_logs_comparison_id_fkey"
            columns: ["comparison_id"]
            isOneToOne: false
            referencedRelation: "comparisons"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          role: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          key: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appointment_date: string
          appointment_type: string
          calendar_event_id: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          message: string | null
          notes: string | null
          patient_id: string | null
          phone: string | null
          preferred_date: string | null
          preferred_time: string | null
          preferred_time_period: string | null
          service_type: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          appointment_type: string
          calendar_event_id?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message?: string | null
          notes?: string | null
          patient_id?: string | null
          phone?: string | null
          preferred_date?: string | null
          preferred_time?: string | null
          preferred_time_period?: string | null
          service_type?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          appointment_type?: string
          calendar_event_id?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message?: string | null
          notes?: string | null
          patient_id?: string | null
          phone?: string | null
          preferred_date?: string | null
          preferred_time?: string | null
          preferred_time_period?: string | null
          service_type?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      assessment_notifications: {
        Row: {
          assessment_id: string
          created_at: string
          id: string
          message: string
          notification_type: string
          patient_id: string
          provider_id: string | null
          read: boolean | null
          read_at: string | null
          sent: boolean | null
          sent_at: string | null
          title: string
        }
        Insert: {
          assessment_id: string
          created_at?: string
          id?: string
          message: string
          notification_type: string
          patient_id: string
          provider_id?: string | null
          read?: boolean | null
          read_at?: string | null
          sent?: boolean | null
          sent_at?: string | null
          title: string
        }
        Update: {
          assessment_id?: string
          created_at?: string
          id?: string
          message?: string
          notification_type?: string
          patient_id?: string
          provider_id?: string | null
          read?: boolean | null
          read_at?: string | null
          sent?: boolean | null
          sent_at?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessment_notifications_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "wound_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action_type: string
          created_at: string
          details: Json | null
          id: string
          ip_address: string | null
          resource_id: string | null
          resource_type: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: string | null
          resource_id?: string | null
          resource_type: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: string | null
          resource_id?: string | null
          resource_type?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      blog_images: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          tags: string[] | null
          title: string | null
          updated_at: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          date: string | null
          excerpt: string
          id: string
          image: string | null
          images: Json | null
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string | null
          date?: string | null
          excerpt: string
          id?: string
          image?: string | null
          images?: Json | null
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          date?: string | null
          excerpt?: string
          id?: string
          image?: string | null
          images?: Json | null
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      booking_rate_limits: {
        Row: {
          booking_count: number | null
          created_at: string | null
          email: string
          first_booking_at: string | null
          id: string
          ip_address: unknown
          last_booking_at: string | null
          updated_at: string | null
        }
        Insert: {
          booking_count?: number | null
          created_at?: string | null
          email: string
          first_booking_at?: string | null
          id?: string
          ip_address: unknown
          last_booking_at?: string | null
          updated_at?: string | null
        }
        Update: {
          booking_count?: number | null
          created_at?: string | null
          email?: string
          first_booking_at?: string | null
          id?: string
          ip_address?: unknown
          last_booking_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          add_ons: Json | null
          created_at: string
          created_by: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          delivery_address: string | null
          duration: number
          end_date: string
          end_time: string
          google_calendar_event_id: string | null
          id: string
          special_requests: string | null
          start_date: string
          start_time: string
          status: string
          total_price: number
          updated_at: string
          vehicle_id: string
          vehicle_name: string
        }
        Insert: {
          add_ons?: Json | null
          created_at?: string
          created_by?: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          delivery_address?: string | null
          duration: number
          end_date: string
          end_time: string
          google_calendar_event_id?: string | null
          id?: string
          special_requests?: string | null
          start_date: string
          start_time: string
          status?: string
          total_price: number
          updated_at?: string
          vehicle_id: string
          vehicle_name: string
        }
        Update: {
          add_ons?: Json | null
          created_at?: string
          created_by?: string | null
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          delivery_address?: string | null
          duration?: number
          end_date?: string
          end_time?: string
          google_calendar_event_id?: string | null
          id?: string
          special_requests?: string | null
          start_date?: string
          start_time?: string
          status?: string
          total_price?: number
          updated_at?: string
          vehicle_id?: string
          vehicle_name?: string
        }
        Relationships: []
      }
      branding: {
        Row: {
          created_at: string
          font_family: string
          id: string
          logo_url: string | null
          primary_color: string
          secondary_color: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          font_family?: string
          id?: string
          logo_url?: string | null
          primary_color?: string
          secondary_color?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          font_family?: string
          id?: string
          logo_url?: string | null
          primary_color?: string
          secondary_color?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      calculator_data: {
        Row: {
          created_at: string
          id: Json
        }
        Insert: {
          created_at?: string
          id: Json
        }
        Update: {
          created_at?: string
          id?: Json
        }
        Relationships: []
      }
      calculator_sessions: {
        Row: {
          created_at: string
          id: string
          session_token: string
          updated_at: string
          user_ip: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          session_token: string
          updated_at?: string
          user_ip?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          session_token?: string
          updated_at?: string
          user_ip?: string | null
        }
        Relationships: []
      }
      calculator_states: {
        Row: {
          calculator_a: Json | null
          calculator_b: Json | null
          calculator_c: Json | null
          calculator_d: Json | null
          created_at: string
          global_params: Json
          id: string
          project_totals: Json | null
          results_a: Json
          results_b: Json
          scenario_a: Json
          scenario_b: Json
          session_id: string
          total_lots: number | null
        }
        Insert: {
          calculator_a?: Json | null
          calculator_b?: Json | null
          calculator_c?: Json | null
          calculator_d?: Json | null
          created_at?: string
          global_params?: Json
          id?: string
          project_totals?: Json | null
          results_a?: Json
          results_b?: Json
          scenario_a?: Json
          scenario_b?: Json
          session_id: string
          total_lots?: number | null
        }
        Update: {
          calculator_a?: Json | null
          calculator_b?: Json | null
          calculator_c?: Json | null
          calculator_d?: Json | null
          created_at?: string
          global_params?: Json
          id?: string
          project_totals?: Json | null
          results_a?: Json
          results_b?: Json
          scenario_a?: Json
          scenario_b?: Json
          session_id?: string
          total_lots?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calculator_states_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "calculator_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string
          id: string
          metadata: Json | null
          sender: string
          session_id: string
          timestamp: string
          user_id: string | null
        }
        Insert: {
          content: string
          id?: string
          metadata?: Json | null
          sender: string
          session_id: string
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          id?: string
          metadata?: Json | null
          sender?: string
          session_id?: string
          timestamp?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_chat_messages_session"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          metadata: Json | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          metadata?: Json | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          metadata?: Json | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      city_market_data: {
        Row: {
          avg_price: string
          city_name: string
          days_on_market: string
          id: string
          last_updated: string | null
          trend: string
        }
        Insert: {
          avg_price: string
          city_name: string
          days_on_market: string
          id?: string
          last_updated?: string | null
          trend: string
        }
        Update: {
          avg_price?: string
          city_name?: string
          days_on_market?: string
          id?: string
          last_updated?: string | null
          trend?: string
        }
        Relationships: []
      }
      cleanup_backup_images_20250530: {
        Row: {
          bucket_name: string | null
          category: string | null
          created_at: string | null
          description: string | null
          file_name: string | null
          file_path: string | null
          file_size: number | null
          height: number | null
          id: string | null
          image_id: string | null
          is_featured: boolean | null
          mime_type: string | null
          original_file_path: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          width: number | null
        }
        Insert: {
          bucket_name?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          height?: number | null
          id?: string | null
          image_id?: string | null
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Update: {
          bucket_name?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          height?: number | null
          id?: string | null
          image_id?: string | null
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Relationships: []
      }
      clearpay_media_audit_log: {
        Row: {
          action: string
          created_at: string
          id: string
          media_file_id: string | null
          new_values: Json | null
          old_values: Json | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          media_file_id?: string | null
          new_values?: Json | null
          old_values?: Json | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          media_file_id?: string | null
          new_values?: Json | null
          old_values?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      clearpay_media_files: {
        Row: {
          ai_description: string | null
          ai_generated: boolean | null
          ai_tags: string[] | null
          alt_text: string | null
          bucket_name: string
          category:
            | Database["public"]["Enums"]["clearpay_media_category_enum"]
            | null
          created_at: string
          description: string | null
          duration: number | null
          file_hash: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          is_featured: boolean | null
          media_type: Database["public"]["Enums"]["clearpay_media_type_enum"]
          mime_type: string | null
          tags: string[] | null
          title: string | null
          updated_at: string
          uploaded_by: string | null
          width: number | null
        }
        Insert: {
          ai_description?: string | null
          ai_generated?: boolean | null
          ai_tags?: string[] | null
          alt_text?: string | null
          bucket_name?: string
          category?:
            | Database["public"]["Enums"]["clearpay_media_category_enum"]
            | null
          created_at?: string
          description?: string | null
          duration?: number | null
          file_hash?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          is_featured?: boolean | null
          media_type: Database["public"]["Enums"]["clearpay_media_type_enum"]
          mime_type?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
        }
        Update: {
          ai_description?: string | null
          ai_generated?: boolean | null
          ai_tags?: string[] | null
          alt_text?: string | null
          bucket_name?: string
          category?:
            | Database["public"]["Enums"]["clearpay_media_category_enum"]
            | null
          created_at?: string
          description?: string | null
          duration?: number | null
          file_hash?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          is_featured?: boolean | null
          media_type?: Database["public"]["Enums"]["clearpay_media_type_enum"]
          mime_type?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
        }
        Relationships: []
      }
      clearpay_profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean
          role?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      comparison_logs: {
        Row: {
          code: string | null
          comparison_id: string
          created_at: string
          duration_ms: number | null
          id: string
          meta: Json
          stage: string
          status: string
          tokens_in: number | null
          tokens_out: number | null
        }
        Insert: {
          code?: string | null
          comparison_id: string
          created_at?: string
          duration_ms?: number | null
          id?: string
          meta?: Json
          stage: string
          status: string
          tokens_in?: number | null
          tokens_out?: number | null
        }
        Update: {
          code?: string | null
          comparison_id?: string
          created_at?: string
          duration_ms?: number | null
          id?: string
          meta?: Json
          stage?: string
          status?: string
          tokens_in?: number | null
          tokens_out?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comparison_logs_comparison_id_fkey"
            columns: ["comparison_id"]
            isOneToOne: false
            referencedRelation: "comparisons"
            referencedColumns: ["id"]
          },
        ]
      }
      comparison_results: {
        Row: {
          comparison_id: string
          created_at: string
          dom_stats: Json | null
          enrichment: Json | null
          fonts: Json | null
          guidelines_version: string
          palette: Json | null
          psi: Json | null
          scores: Json
          updated_at: string
          videoSignals: Json | null
        }
        Insert: {
          comparison_id: string
          created_at?: string
          dom_stats?: Json | null
          enrichment?: Json | null
          fonts?: Json | null
          guidelines_version?: string
          palette?: Json | null
          psi?: Json | null
          scores: Json
          updated_at?: string
          videoSignals?: Json | null
        }
        Update: {
          comparison_id?: string
          created_at?: string
          dom_stats?: Json | null
          enrichment?: Json | null
          fonts?: Json | null
          guidelines_version?: string
          palette?: Json | null
          psi?: Json | null
          scores?: Json
          updated_at?: string
          videoSignals?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "comparison_results_comparison_id_fkey"
            columns: ["comparison_id"]
            isOneToOne: true
            referencedRelation: "comparisons"
            referencedColumns: ["id"]
          },
        ]
      }
      comparisons: {
        Row: {
          completed_at: string | null
          created_at: string
          error: string | null
          id: string
          site_a_url: string
          site_b_url: string
          status: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          site_a_url: string
          site_b_url: string
          status: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          site_a_url?: string
          site_b_url?: string
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      construction_images: {
        Row: {
          bucket_name: string
          category: string
          created_at: string
          description: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          image_id: string
          is_featured: boolean | null
          mime_type: string | null
          sort_order: number | null
          tags: string[] | null
          title: string | null
          updated_at: string
          uploaded_by: string | null
          width: number | null
        }
        Insert: {
          bucket_name: string
          category: string
          created_at?: string
          description?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id: string
          is_featured?: boolean | null
          mime_type?: string | null
          sort_order?: number | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
        }
        Update: {
          bucket_name?: string
          category?: string
          created_at?: string
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id?: string
          is_featured?: boolean | null
          mime_type?: string | null
          sort_order?: number | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string
          preferred_contact: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone: string
          preferred_contact: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string
          preferred_contact?: string
        }
        Relationships: []
      }
      custom_design_blogs: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          date: string | null
          excerpt: string
          id: string
          image: string | null
          images: Json | null
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string
          category: string
          content: string
          created_at?: string | null
          date?: string | null
          excerpt: string
          id?: string
          image?: string | null
          images?: Json | null
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          date?: string | null
          excerpt?: string
          id?: string
          image?: string | null
          images?: Json | null
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      deleted_orphaned_images_20250530: {
        Row: {
          bucket_name: string
          category: string
          created_at: string | null
          description: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          image_id: string
          is_featured: boolean | null
          mime_type: string | null
          original_file_path: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          width: number | null
        }
        Insert: {
          bucket_name: string
          category: string
          created_at?: string | null
          description?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id: string
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Update: {
          bucket_name?: string
          category?: string
          created_at?: string | null
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id?: string
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Relationships: []
      }
      evidence: {
        Row: {
          blur_score: number | null
          comparison_id: string
          created_at: string
          height: number | null
          id: string
          meta: Json
          palette: Json | null
          path: string
          section: string | null
          site: string
          type: string
          viewport: string
          width: number | null
        }
        Insert: {
          blur_score?: number | null
          comparison_id: string
          created_at?: string
          height?: number | null
          id?: string
          meta?: Json
          palette?: Json | null
          path: string
          section?: string | null
          site: string
          type?: string
          viewport?: string
          width?: number | null
        }
        Update: {
          blur_score?: number | null
          comparison_id?: string
          created_at?: string
          height?: number | null
          id?: string
          meta?: Json
          palette?: Json | null
          path?: string
          section?: string | null
          site?: string
          type?: string
          viewport?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "evidence_comparison_id_fkey"
            columns: ["comparison_id"]
            isOneToOne: false
            referencedRelation: "comparisons"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          property_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          property_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          property_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      function_call_logs: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          ip: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          ip: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          ip?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      google_calendar_events: {
        Row: {
          booking_id: string
          calendar_event_id: string
          calendar_id: string
          created_at: string
          event_status: string
          id: string
          updated_at: string
        }
        Insert: {
          booking_id: string
          calendar_event_id: string
          calendar_id?: string
          created_at?: string
          event_status?: string
          id?: string
          updated_at?: string
        }
        Update: {
          booking_id?: string
          calendar_event_id?: string
          calendar_id?: string
          created_at?: string
          event_status?: string
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "google_calendar_events_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      images: {
        Row: {
          bucket_name: string
          category: string
          created_at: string | null
          description: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          image_id: string
          is_featured: boolean | null
          mime_type: string | null
          original_file_path: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          width: number | null
        }
        Insert: {
          bucket_name: string
          category: string
          created_at?: string | null
          description?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id: string
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Update: {
          bucket_name?: string
          category?: string
          created_at?: string | null
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id?: string
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Relationships: []
      }
      images_backup_paths: {
        Row: {
          file_path: string | null
          image_id: string | null
          updated_at: string | null
        }
        Insert: {
          file_path?: string | null
          image_id?: string | null
          updated_at?: string | null
        }
        Update: {
          file_path?: string | null
          image_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      images21: {
        Row: {
          bucket_name: string
          category: string
          created_at: string | null
          description: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          image_id: string
          is_featured: boolean | null
          mime_type: string | null
          original_file_path: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          width: number | null
        }
        Insert: {
          bucket_name: string
          category?: string
          created_at?: string | null
          description?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id: string
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Update: {
          bucket_name?: string
          category?: string
          created_at?: string | null
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id?: string
          is_featured?: boolean | null
          mime_type?: string | null
          original_file_path?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Relationships: []
      }
      juans_blogs: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          date: string | null
          excerpt: string
          id: string
          image: string | null
          images: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string | null
          date?: string | null
          excerpt: string
          id?: string
          image?: string | null
          images?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          date?: string | null
          excerpt?: string
          id?: string
          image?: string | null
          images?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      media_audit_log: {
        Row: {
          action: string
          created_at: string
          id: string
          media_file_id: string | null
          new_values: Json | null
          old_values: Json | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          media_file_id?: string | null
          new_values?: Json | null
          old_values?: Json | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          media_file_id?: string | null
          new_values?: Json | null
          old_values?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_audit_log_media_file_id_fkey"
            columns: ["media_file_id"]
            isOneToOne: false
            referencedRelation: "media_files"
            referencedColumns: ["id"]
          },
        ]
      }
      media_files: {
        Row: {
          ai_description: string | null
          ai_generated: boolean | null
          ai_tags: string[] | null
          alt_text: string | null
          bucket_name: string
          category: Database["public"]["Enums"]["media_category"] | null
          created_at: string
          description: string | null
          duration: number | null
          file_hash: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          is_featured: boolean | null
          media_type: Database["public"]["Enums"]["media_type"]
          mime_type: string | null
          tags: string[] | null
          title: string | null
          updated_at: string
          uploaded_by: string | null
          width: number | null
        }
        Insert: {
          ai_description?: string | null
          ai_generated?: boolean | null
          ai_tags?: string[] | null
          alt_text?: string | null
          bucket_name?: string
          category?: Database["public"]["Enums"]["media_category"] | null
          created_at?: string
          description?: string | null
          duration?: number | null
          file_hash?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          is_featured?: boolean | null
          media_type: Database["public"]["Enums"]["media_type"]
          mime_type?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
        }
        Update: {
          ai_description?: string | null
          ai_generated?: boolean | null
          ai_tags?: string[] | null
          alt_text?: string | null
          bucket_name?: string
          category?: Database["public"]["Enums"]["media_category"] | null
          created_at?: string
          description?: string | null
          duration?: number | null
          file_hash?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          is_featured?: boolean | null
          media_type?: Database["public"]["Enums"]["media_type"]
          mime_type?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
        }
        Relationships: []
      }
      newsletter_issues: {
        Row: {
          author: string | null
          author_initials: string | null
          category: string | null
          color_index: number | null
          created_at: string | null
          date: string
          description: string
          id: string
          image_id: string | null
          image_url: string
          is_featured: boolean | null
          link: string
          sort_order: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          author_initials?: string | null
          category?: string | null
          color_index?: number | null
          created_at?: string | null
          date: string
          description: string
          id?: string
          image_id?: string | null
          image_url: string
          is_featured?: boolean | null
          link: string
          sort_order?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          author_initials?: string | null
          category?: string | null
          color_index?: number | null
          created_at?: string | null
          date?: string
          description?: string
          id?: string
          image_id?: string | null
          image_url?: string
          is_featured?: boolean | null
          link?: string
          sort_order?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          source: string | null
          status: string
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          source?: string | null
          status?: string
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          source?: string | null
          status?: string
          subscribed_at?: string
        }
        Relationships: []
      }
      page_image_configurations: {
        Row: {
          component_id: string
          created_at: string
          id: string
          image_id: string
          page_path: string
          updated_at: string
        }
        Insert: {
          component_id: string
          created_at?: string
          id?: string
          image_id: string
          page_path: string
          updated_at?: string
        }
        Update: {
          component_id?: string
          created_at?: string
          id?: string
          image_id?: string
          page_path?: string
          updated_at?: string
        }
        Relationships: []
      }
      patient_appointments: {
        Row: {
          appointment_date: string
          appointment_type: string
          created_at: string | null
          id: string
          notes: string | null
          patient_id: string
          status: string | null
          updated_at: string | null
          wound_id: string | null
        }
        Insert: {
          appointment_date: string
          appointment_type: string
          created_at?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          status?: string | null
          updated_at?: string | null
          wound_id?: string | null
        }
        Update: {
          appointment_date?: string
          appointment_type?: string
          created_at?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          status?: string | null
          updated_at?: string | null
          wound_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "patient_appointments_wound_id_fkey"
            columns: ["wound_id"]
            isOneToOne: false
            referencedRelation: "patient_wounds"
            referencedColumns: ["id"]
          },
        ]
      }
      patient_messages: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          patient_id: string
          sender_name: string
          sender_type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          patient_id: string
          sender_name: string
          sender_type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          patient_id?: string
          sender_name?: string
          sender_type?: string
        }
        Relationships: []
      }
      patient_wounds: {
        Row: {
          created_at: string | null
          current_size_depth: number | null
          current_size_length: number | null
          current_size_width: number | null
          id: string
          initial_size_depth: number | null
          initial_size_length: number | null
          initial_size_width: number | null
          location: string
          notes: string | null
          patient_id: string
          status: string | null
          updated_at: string | null
          wound_type: string
        }
        Insert: {
          created_at?: string | null
          current_size_depth?: number | null
          current_size_length?: number | null
          current_size_width?: number | null
          id?: string
          initial_size_depth?: number | null
          initial_size_length?: number | null
          initial_size_width?: number | null
          location: string
          notes?: string | null
          patient_id: string
          status?: string | null
          updated_at?: string | null
          wound_type: string
        }
        Update: {
          created_at?: string | null
          current_size_depth?: number | null
          current_size_length?: number | null
          current_size_width?: number | null
          id?: string
          initial_size_depth?: number | null
          initial_size_length?: number | null
          initial_size_width?: number | null
          location?: string
          notes?: string | null
          patient_id?: string
          status?: string | null
          updated_at?: string | null
          wound_type?: string
        }
        Relationships: []
      }
      pdf_blog_posts: {
        Row: {
          author: string
          category: string | null
          created_at: string
          excerpt: string | null
          id: string
          pdf_url: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          pdf_url: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          pdf_url?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          city: string | null
          created_at: string
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          first_name: string | null
          gender: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          first_name?: string | null
          gender?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      protected_resources: {
        Row: {
          admin_only: boolean
          backup_required: boolean
          confirmation_required: boolean
          created_at: string
          id: string
          protection_level: string
          resource_name: string
          resource_type: string
          updated_at: string
        }
        Insert: {
          admin_only?: boolean
          backup_required?: boolean
          confirmation_required?: boolean
          created_at?: string
          id?: string
          protection_level?: string
          resource_name: string
          resource_type: string
          updated_at?: string
        }
        Update: {
          admin_only?: boolean
          backup_required?: boolean
          confirmation_required?: boolean
          created_at?: string
          id?: string
          protection_level?: string
          resource_name?: string
          resource_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      provider_profiles: {
        Row: {
          created_at: string | null
          department: string | null
          email: string | null
          id: string
          is_active: boolean | null
          license_number: string | null
          phone: string | null
          specialty: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          license_number?: string | null
          phone?: string | null
          specialty?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          department?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          license_number?: string | null
          phone?: string | null
          specialty?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      provider_reviews: {
        Row: {
          assessment_id: string
          clinical_notes: string | null
          created_at: string
          follow_up_date: string | null
          follow_up_required: boolean | null
          id: string
          provider_id: string | null
          review_status: string
          reviewed_at: string | null
          treatment_plan_changes: string | null
          updated_at: string
          urgency_level: string | null
        }
        Insert: {
          assessment_id: string
          clinical_notes?: string | null
          created_at?: string
          follow_up_date?: string | null
          follow_up_required?: boolean | null
          id?: string
          provider_id?: string | null
          review_status?: string
          reviewed_at?: string | null
          treatment_plan_changes?: string | null
          updated_at?: string
          urgency_level?: string | null
        }
        Update: {
          assessment_id?: string
          clinical_notes?: string | null
          created_at?: string
          follow_up_date?: string | null
          follow_up_required?: boolean | null
          id?: string
          provider_id?: string | null
          review_status?: string
          reviewed_at?: string | null
          treatment_plan_changes?: string | null
          updated_at?: string
          urgency_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "provider_reviews_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "wound_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      quote_requests: {
        Row: {
          additional_services: Json | null
          base_rate: number
          bedrooms: number
          created_at: string
          crew_size: number
          customer_email: string
          customer_name: string
          customer_phone: string
          destination_address: string
          distance_fee: number | null
          estimated_hours: number
          has_elevator: boolean | null
          home_type: string
          id: string
          long_walk: boolean | null
          moving_date: string | null
          origin_address: string
          quote_status: string | null
          special_requests: string | null
          square_footage: number | null
          stairs_destination: number | null
          stairs_origin: number | null
          total_estimate: number
          updated_at: string
        }
        Insert: {
          additional_services?: Json | null
          base_rate: number
          bedrooms: number
          created_at?: string
          crew_size: number
          customer_email: string
          customer_name: string
          customer_phone: string
          destination_address: string
          distance_fee?: number | null
          estimated_hours: number
          has_elevator?: boolean | null
          home_type: string
          id?: string
          long_walk?: boolean | null
          moving_date?: string | null
          origin_address: string
          quote_status?: string | null
          special_requests?: string | null
          square_footage?: number | null
          stairs_destination?: number | null
          stairs_origin?: number | null
          total_estimate: number
          updated_at?: string
        }
        Update: {
          additional_services?: Json | null
          base_rate?: number
          bedrooms?: number
          created_at?: string
          crew_size?: number
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          destination_address?: string
          distance_fee?: number | null
          estimated_hours?: number
          has_elevator?: boolean | null
          home_type?: string
          id?: string
          long_walk?: boolean | null
          moving_date?: string | null
          origin_address?: string
          quote_status?: string | null
          special_requests?: string | null
          square_footage?: number | null
          stairs_destination?: number | null
          stairs_origin?: number | null
          total_estimate?: number
          updated_at?: string
        }
        Relationships: []
      }
      reef_gallery_images: {
        Row: {
          bucket_name: string
          category: string
          created_at: string
          depth_info: string | null
          description: string | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          image_id: string
          is_featured: boolean | null
          location_info: string | null
          mime_type: string | null
          sort_order: number | null
          species_name: string | null
          tags: string[] | null
          title: string | null
          updated_at: string
          uploaded_by: string | null
          width: number | null
          year_taken: string | null
        }
        Insert: {
          bucket_name: string
          category: string
          created_at?: string
          depth_info?: string | null
          description?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id: string
          is_featured?: boolean | null
          location_info?: string | null
          mime_type?: string | null
          sort_order?: number | null
          species_name?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
          year_taken?: string | null
        }
        Update: {
          bucket_name?: string
          category?: string
          created_at?: string
          depth_info?: string | null
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_id?: string
          is_featured?: boolean | null
          location_info?: string | null
          mime_type?: string | null
          sort_order?: number | null
          species_name?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          width?: number | null
          year_taken?: string | null
        }
        Relationships: []
      }
      reef_polygons: {
        Row: {
          coordinates: Json
          created_at: string
          id: string
          name: string
          notes: string | null
          type: Database["public"]["Enums"]["reef_polygon_category"]
          updated_at: string
        }
        Insert: {
          coordinates: Json
          created_at?: string
          id?: string
          name: string
          notes?: string | null
          type: Database["public"]["Enums"]["reef_polygon_category"]
          updated_at?: string
        }
        Update: {
          coordinates?: Json
          created_at?: string
          id?: string
          name?: string
          notes?: string | null
          type?: Database["public"]["Enums"]["reef_polygon_category"]
          updated_at?: string
        }
        Relationships: []
      }
      reef_sites: {
        Row: {
          created_at: string
          deployed: string | null
          depth: string | null
          description: string | null
          id: string
          image_logo: string | null
          lat: number
          lng: number
          materials: string | null
          name: string
          notes: string | null
          reef_images: string | null
          reef_site_videos: string | null
          size: string | null
          type: Database["public"]["Enums"]["reef_site_category"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deployed?: string | null
          depth?: string | null
          description?: string | null
          id?: string
          image_logo?: string | null
          lat: number
          lng: number
          materials?: string | null
          name: string
          notes?: string | null
          reef_images?: string | null
          reef_site_videos?: string | null
          size?: string | null
          type: Database["public"]["Enums"]["reef_site_category"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deployed?: string | null
          depth?: string | null
          description?: string | null
          id?: string
          image_logo?: string | null
          lat?: number
          lng?: number
          materials?: string | null
          name?: string
          notes?: string | null
          reef_images?: string | null
          reef_site_videos?: string | null
          size?: string | null
          type?: Database["public"]["Enums"]["reef_site_category"]
          updated_at?: string
        }
        Relationships: []
      }
      regenerative_woundcare_images: {
        Row: {
          alt_text: string | null
          bucket_name: string
          category: string | null
          created_at: string | null
          description: string | null
          file_hash: string | null
          file_name: string
          file_path: string
          file_size: number | null
          image_id: string
          is_featured: boolean | null
          owner_id: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          alt_text?: string | null
          bucket_name?: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_hash?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          image_id?: string
          is_featured?: boolean | null
          owner_id?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          alt_text?: string | null
          bucket_name?: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_hash?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          image_id?: string
          is_featured?: boolean | null
          owner_id?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      regenerative_woundcare_page_images: {
        Row: {
          component_id: string
          created_at: string | null
          id: string
          image_id: string
          page_path: string
          updated_at: string | null
        }
        Insert: {
          component_id: string
          created_at?: string | null
          id?: string
          image_id: string
          page_path: string
          updated_at?: string | null
        }
        Update: {
          component_id?: string
          created_at?: string | null
          id?: string
          image_id?: string
          page_path?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "regenerative_woundcare_page_images_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "regenerative_woundcare_images"
            referencedColumns: ["image_id"]
          },
        ]
      }
      rgv_reefs_blog: {
        Row: {
          author: string | null
          category: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          id: string
          image: string | null
          images: Json | null
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image?: string | null
          images?: Json | null
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image?: string | null
          images?: Json | null
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      rgv_regenerative_woundcare_videos: {
        Row: {
          bucket_name: string
          category: string | null
          created_at: string | null
          description: string | null
          duration: number | null
          file_name: string
          file_path: string
          file_size: number | null
          is_featured: boolean | null
          owner_id: string | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string | null
          video_id: string
        }
        Insert: {
          bucket_name?: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          file_name: string
          file_path: string
          file_size?: number | null
          is_featured?: boolean | null
          owner_id?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
          video_id?: string
        }
        Update: {
          bucket_name?: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          is_featured?: boolean | null
          owner_id?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
          video_id?: string
        }
        Relationships: []
      }
      shared_links: {
        Row: {
          comparison_id: string
          created_at: string
          created_by: string
          expires_at: string | null
          id: string
          password_hash: string | null
          token: string
          updated_at: string
        }
        Insert: {
          comparison_id: string
          created_at?: string
          created_by: string
          expires_at?: string | null
          id?: string
          password_hash?: string | null
          token: string
          updated_at?: string
        }
        Update: {
          comparison_id?: string
          created_at?: string
          created_by?: string
          expires_at?: string | null
          id?: string
          password_hash?: string | null
          token?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shared_links_comparison_id_fkey"
            columns: ["comparison_id"]
            isOneToOne: false
            referencedRelation: "comparisons"
            referencedColumns: ["id"]
          },
        ]
      }
      spi_businesses: {
        Row: {
          address: string | null
          amenities: string[] | null
          business_hours: Json | null
          category: Database["public"]["Enums"]["business_category"]
          created_at: string | null
          description: string | null
          email: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          is_golf_cart_friendly: boolean | null
          latitude: number
          longitude: number
          name: string
          phone: string | null
          price_range: string | null
          rating: number | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          amenities?: string[] | null
          business_hours?: Json | null
          category: Database["public"]["Enums"]["business_category"]
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_golf_cart_friendly?: boolean | null
          latitude: number
          longitude: number
          name: string
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          amenities?: string[] | null
          business_hours?: Json | null
          category?: Database["public"]["Enums"]["business_category"]
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_golf_cart_friendly?: boolean | null
          latitude?: number
          longitude?: number
          name?: string
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      text_content: {
        Row: {
          component_id: string
          content: string
          content_key: string
          created_at: string
          id: string
          page_path: string
          updated_at: string
        }
        Insert: {
          component_id: string
          content: string
          content_key: string
          created_at?: string
          id?: string
          page_path: string
          updated_at?: string
        }
        Update: {
          component_id?: string
          content?: string
          content_key?: string
          created_at?: string
          id?: string
          page_path?: string
          updated_at?: string
        }
        Relationships: []
      }
      treatment_plans: {
        Row: {
          created_at: string | null
          duration: string | null
          frequency: string | null
          id: string
          instructions: string | null
          patient_id: string
          plan_description: string | null
          plan_title: string
          status: string | null
          updated_at: string | null
          wound_id: string | null
        }
        Insert: {
          created_at?: string | null
          duration?: string | null
          frequency?: string | null
          id?: string
          instructions?: string | null
          patient_id: string
          plan_description?: string | null
          plan_title: string
          status?: string | null
          updated_at?: string | null
          wound_id?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: string | null
          frequency?: string | null
          id?: string
          instructions?: string | null
          patient_id?: string
          plan_description?: string | null
          plan_title?: string
          status?: string | null
          updated_at?: string | null
          wound_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "treatment_plans_wound_id_fkey"
            columns: ["wound_id"]
            isOneToOne: false
            referencedRelation: "patient_wounds"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          id: string
          is_active: boolean | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          id?: string
          is_active?: boolean | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          bucket_name: string
          category: string | null
          created_at: string
          description: string | null
          duration: number | null
          file_name: string
          file_path: string
          file_size: number | null
          height: number | null
          id: string
          is_featured: boolean | null
          mime_type: string | null
          tags: string[] | null
          thumbnail_path: string | null
          title: string | null
          updated_at: string
          video_id: string
          width: number | null
          youtube_source_url: string | null
        }
        Insert: {
          bucket_name?: string
          category?: string | null
          created_at?: string
          description?: string | null
          duration?: number | null
          file_name: string
          file_path: string
          file_size?: number | null
          height?: number | null
          id?: string
          is_featured?: boolean | null
          mime_type?: string | null
          tags?: string[] | null
          thumbnail_path?: string | null
          title?: string | null
          updated_at?: string
          video_id: string
          width?: number | null
          youtube_source_url?: string | null
        }
        Update: {
          bucket_name?: string
          category?: string | null
          created_at?: string
          description?: string | null
          duration?: number | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          height?: number | null
          id?: string
          is_featured?: boolean | null
          mime_type?: string | null
          tags?: string[] | null
          thumbnail_path?: string | null
          title?: string | null
          updated_at?: string
          video_id?: string
          width?: number | null
          youtube_source_url?: string | null
        }
        Relationships: []
      }
      volunteer_applications: {
        Row: {
          additional_info: string | null
          address: string | null
          agreements: Json | null
          availability: string[] | null
          city: string | null
          created_at: string
          email: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          experience: string | null
          id: string
          interests: string[] | null
          name: string
          phone: string
          state: string | null
          updated_at: string
          zip_code: string | null
        }
        Insert: {
          additional_info?: string | null
          address?: string | null
          agreements?: Json | null
          availability?: string[] | null
          city?: string | null
          created_at?: string
          email: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          experience?: string | null
          id?: string
          interests?: string[] | null
          name: string
          phone: string
          state?: string | null
          updated_at?: string
          zip_code?: string | null
        }
        Update: {
          additional_info?: string | null
          address?: string | null
          agreements?: Json | null
          availability?: string[] | null
          city?: string | null
          created_at?: string
          email?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          experience?: string | null
          id?: string
          interests?: string[] | null
          name?: string
          phone?: string
          state?: string | null
          updated_at?: string
          zip_code?: string | null
        }
        Relationships: []
      }
      workflow_logs: {
        Row: {
          completed_at: string | null
          error: string | null
          execution_id: string
          id: string
          input_data: Json | null
          output_data: Json | null
          started_at: string
          status: string
          user_id: string | null
          workflow_id: string
        }
        Insert: {
          completed_at?: string | null
          error?: string | null
          execution_id: string
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string
          status: string
          user_id?: string | null
          workflow_id: string
        }
        Update: {
          completed_at?: string | null
          error?: string | null
          execution_id?: string
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string
          status?: string
          user_id?: string | null
          workflow_id?: string
        }
        Relationships: []
      }
      wound_assessments: {
        Row: {
          ai_confidence_score: number | null
          ai_healing_stage: string | null
          ai_recommendations: string[] | null
          ai_risk_factors: string[] | null
          answers: Json
          area_mm2: number | null
          assessment_date: string
          created_at: string
          depth_mm: number | null
          id: string
          length_mm: number | null
          notes: string | null
          provider_notes: string | null
          provider_reviewed: boolean | null
          recommendation: Json
          status: string | null
          updated_at: string
          user_id: string
          width_mm: number | null
          wound_id: string | null
          wound_location: string | null
        }
        Insert: {
          ai_confidence_score?: number | null
          ai_healing_stage?: string | null
          ai_recommendations?: string[] | null
          ai_risk_factors?: string[] | null
          answers: Json
          area_mm2?: number | null
          assessment_date?: string
          created_at?: string
          depth_mm?: number | null
          id?: string
          length_mm?: number | null
          notes?: string | null
          provider_notes?: string | null
          provider_reviewed?: boolean | null
          recommendation: Json
          status?: string | null
          updated_at?: string
          user_id: string
          width_mm?: number | null
          wound_id?: string | null
          wound_location?: string | null
        }
        Update: {
          ai_confidence_score?: number | null
          ai_healing_stage?: string | null
          ai_recommendations?: string[] | null
          ai_risk_factors?: string[] | null
          answers?: Json
          area_mm2?: number | null
          assessment_date?: string
          created_at?: string
          depth_mm?: number | null
          id?: string
          length_mm?: number | null
          notes?: string | null
          provider_notes?: string | null
          provider_reviewed?: boolean | null
          recommendation?: Json
          status?: string | null
          updated_at?: string
          user_id?: string
          width_mm?: number | null
          wound_id?: string | null
          wound_location?: string | null
        }
        Relationships: []
      }
      wound_images: {
        Row: {
          ai_processed: boolean | null
          assessment_id: string
          background_removed: boolean | null
          created_at: string
          file_name: string | null
          file_path: string | null
          file_size: number | null
          height: number | null
          id: string
          image_url: string
          measurements: Json | null
          mime_type: string | null
          patient_id: string | null
          updated_at: string
          width: number | null
        }
        Insert: {
          ai_processed?: boolean | null
          assessment_id: string
          background_removed?: boolean | null
          created_at?: string
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          height?: number | null
          id?: string
          image_url: string
          measurements?: Json | null
          mime_type?: string | null
          patient_id?: string | null
          updated_at?: string
          width?: number | null
        }
        Update: {
          ai_processed?: boolean | null
          assessment_id?: string
          background_removed?: boolean | null
          created_at?: string
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          height?: number | null
          id?: string
          image_url?: string
          measurements?: Json | null
          mime_type?: string | null
          patient_id?: string | null
          updated_at?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "wound_images_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "wound_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      wound_progress_photos: {
        Row: {
          created_at: string | null
          id: string
          measurements: Json | null
          notes: string | null
          patient_id: string
          photo_date: string | null
          photo_url: string
          wound_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          measurements?: Json | null
          notes?: string | null
          patient_id: string
          photo_date?: string | null
          photo_url: string
          wound_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          measurements?: Json | null
          notes?: string | null
          patient_id?: string
          photo_date?: string | null
          photo_url?: string
          wound_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wound_progress_photos_wound_id_fkey"
            columns: ["wound_id"]
            isOneToOne: false
            referencedRelation: "patient_wounds"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_api_key: {
        Args: Record<PropertyKey, never> | { api_key: string }
        Returns: string
      }
      check_booking_rate_limit: {
        Args: { p_email: string; p_ip_address?: string }
        Returns: boolean
      }
      check_duplicate_file: {
        Args: { file_hash_input: string }
        Returns: {
          created_at: string
          file_name: string
          file_path: string
          id: string
          title: string
        }[]
      }
      cleanup_orphaned_storage_files: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      clearpay_check_duplicate_file: {
        Args: { file_hash_input: string }
        Returns: {
          created_at: string
          file_name: string
          file_path: string
          id: string
          title: string
        }[]
      }
      clearpay_is_admin: {
        Args: { user_id?: string }
        Returns: boolean
      }
      delete_image_with_cleanup: {
        Args: { target_image_id: string }
        Returns: Json
      }
      find_duplicate_images: {
        Args: { input_hash?: string; input_size?: number }
        Returns: {
          created_at: string
          duplicate_group: string
          file_name: string
          file_path: string
          image_id: string
          title: string
        }[]
      }
      generate_image_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_reef_image_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_video_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_comparison_result: {
        Args: { p_run_id: string }
        Returns: {
          result: Json
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: {
        Args: { user_id?: string }
        Returns: boolean
      }
      is_admin_user: {
        Args: { user_id?: string }
        Returns: boolean
      }
      is_provider: {
        Args: { _user_id?: string }
        Returns: boolean
      }
      search_similar_images: {
        Args: {
          category_filter?: string
          current_image_id?: string
          limit_count?: number
          search_context?: string
        }
        Returns: {
          category: string
          description: string
          file_path: string
          id: string
          image_id: string
          is_featured: boolean
          similarity_score: number
          tags: string[]
          title: string
        }[]
      }
      sync_storage_images_to_db: {
        Args: Record<PropertyKey, never>
        Returns: {
          skipped_count: number
          synced_count: number
          total_storage_files: number
        }[]
      }
      upsert_image_configuration: {
        Args: {
          p_component_id: string
          p_image_id: string
          p_page_path: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "patient" | "provider" | "admin"
      business_category:
        | "restaurant"
        | "hotel"
        | "attraction"
        | "beach_access"
        | "shopping"
        | "entertainment"
        | "services"
        | "recreation"
      clearpay_media_category_enum:
        | "solution-image"
        | "hero-banner"
        | "testimonial"
        | "team-photo"
        | "blog-image"
        | "marketing-asset"
        | "document"
        | "other"
      clearpay_media_type_enum: "image" | "video" | "document" | "audio"
      media_category:
        | "marketing"
        | "product"
        | "team"
        | "events"
        | "technology"
        | "lifestyle"
        | "abstract"
        | "nature"
        | "business"
        | "graphics"
      media_type: "image" | "video"
      reef_polygon_category:
        | "nursery"
        | "high-relief"
        | "memorial"
        | "boundary"
        | "reef-boundary"
      reef_site_category:
        | "nursery"
        | "high-relief"
        | "vessel"
        | "memorial"
        | "patch-reef"
        | "pyramid-reef"
        | "box-culverts"
        | "cinder-blocks"
        | "round-culverts"
        | "octo-reef"
        | "sunk-boat"
        | "concrete"
        | "limestone"
        | "watermill"
        | "tile"
        | "dividers"
        | "cca-nursery"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["patient", "provider", "admin"],
      business_category: [
        "restaurant",
        "hotel",
        "attraction",
        "beach_access",
        "shopping",
        "entertainment",
        "services",
        "recreation",
      ],
      clearpay_media_category_enum: [
        "solution-image",
        "hero-banner",
        "testimonial",
        "team-photo",
        "blog-image",
        "marketing-asset",
        "document",
        "other",
      ],
      clearpay_media_type_enum: ["image", "video", "document", "audio"],
      media_category: [
        "marketing",
        "product",
        "team",
        "events",
        "technology",
        "lifestyle",
        "abstract",
        "nature",
        "business",
        "graphics",
      ],
      media_type: ["image", "video"],
      reef_polygon_category: [
        "nursery",
        "high-relief",
        "memorial",
        "boundary",
        "reef-boundary",
      ],
      reef_site_category: [
        "nursery",
        "high-relief",
        "vessel",
        "memorial",
        "patch-reef",
        "pyramid-reef",
        "box-culverts",
        "cinder-blocks",
        "round-culverts",
        "octo-reef",
        "sunk-boat",
        "concrete",
        "limestone",
        "watermill",
        "tile",
        "dividers",
        "cca-nursery",
      ],
    },
  },
} as const
